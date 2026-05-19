import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const WINGS = [
  { url: 'faculty_cse.php', name: 'CSE' },
  { url: 'faculty_aiml.php', name: 'AIML' },
  { url: 'faculty_csbs.php', name: 'CSBS' },
  { url: 'faculty_cyber.php', name: 'Cyber Security' },
  { url: 'faculty_ds.php', name: 'Data Science' },
  { url: 'faculty_iot.php', name: 'IoT' },
  { url: 'faculty_aids.php', name: 'AI & DS' }
];

const BASE_URL = 'https://www.nsec.ac.in/fps/';

async function scrapeFaculty() {
  const outputDir = path.join(process.cwd(), 'raw-stitch-code', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const wing of WINGS) {
    console.log(`Fetching ${wing.name} from ${wing.url}...`);
    try {
      const res = await fetch(BASE_URL + wing.url);
      if (!res.ok) {
        console.error(`Failed to fetch ${wing.url}: ${res.statusText}`);
        continue;
      }
      const html = await res.text();
      const $ = cheerio.load(html);
      
      const profiles = [];
      
      // Look for the faculty cards
      // In NSEC website, they usually use some specific classes or structures for faculty
      // E.g., <div class="col-lg-3 col-md-4 col-sm-6"> or similar grid for team members
      // We will look for images and names. Usually in a div like .team-member or similar
      
      // A common pattern might be:
      // <div class="team-block ..."> 
      // <div class="inner-box"> 
      // <div class="image-box"><img src="..."></div>
      // <div class="info-box"><h4 class="name"><a href="...">Name</a></h4> <span class="designation">...</span>
      
      // Let's do a broad search for names which seem to be in <a> tags inside h4 or h5, or just inside specific blocks.
      // Wait, let's just dump all text inside h4 and h5 and their preceding images.
      
      // Better approach: Let's first log the HTML snippet of the first page to see the structure if we aren't sure.
      // Assuming a generic team structure, but let's dump HTML if we can't find profiles.
      
      $('.team-block, .team-member, .single-team-member, .faculty-box, .col-md-3').each((i, el) => {
        const nameNode = $(el).find('h3, h4, h5, .name, .title').first();
        const name = nameNode.text().trim().replace(/\s+/g, ' ');
        if (!name || name.length < 3 || name.toLowerCase().includes('useful links') || name.toLowerCase().includes('contact us')) return;
        
        const designation = $(el).find('.designation, .position, p').first().text().trim().replace(/\s+/g, ' ');
        let imageSrc = $(el).find('img').attr('src');
        if (imageSrc && !imageSrc.startsWith('http')) {
          imageSrc = BASE_URL + imageSrc;
        }
        
        const profileUrl = $(el).find('a').attr('href');
        
        // ensure it looks like a person
        if (/^(Dr\.|Mr\.|Ms\.|Prof\.)/i.test(name)) {
            profiles.push({
            name,
            designation,
            imageSrc,
            profileUrl: profileUrl ? (profileUrl.startsWith('http') ? profileUrl : BASE_URL + profileUrl) : null,
            });
        }
      });
      
      if (profiles.length === 0) {
        $('tr').each((i, el) => {
           const $a = $(el).find('a[href*="faculty.php?id="]');
           if ($a.length === 0) return;
           
           const name = $a.text().trim().replace(/\s+/g, ' ');
           if (!name || name.length < 3) return;
           
           let profileUrl = $a.attr('href');
           if (profileUrl && !profileUrl.startsWith('http')) {
             profileUrl = profileUrl.startsWith('../') ? profileUrl.replace('../', 'https://www.nsec.ac.in/') : BASE_URL + profileUrl;
           }

           let imageSrc = $(el).find('img').attr('src');
           if (imageSrc && !imageSrc.startsWith('http')) {
             imageSrc = imageSrc.startsWith('../') ? imageSrc.replace('../', 'https://www.nsec.ac.in/') : BASE_URL + imageSrc;
           }

           // Extract text to find designation, experience, research area
           // The text is mixed in the td
           const tdHtml = $(el).find('td').html() || '';
           
           // Extract designation: usually right after the <br> following the name
           const textLines = $(el).find('td').text().split('\n').map(l => l.trim()).filter(l => l.length > 0);
           
           // The name is typically the first text element, but wait, the name is in $a
           // Let's just find the text node after the <a> tag.
           // Because cheerio text() strips HTML, let's look at the html
           let designation = '';
           const desigMatch = tdHtml.match(/<\/a>\s*<br>\s*([^<]+)/);
           if (desigMatch && desigMatch[1]) {
             designation = desigMatch[1].trim();
           }
           
           let researchArea = '';
           const resMatch = tdHtml.match(/<b>Research Area:\s*<\/b>\s*<div[^>]*>([^<]+)<\/div>/);
           if (resMatch && resMatch[1]) {
               researchArea = resMatch[1].trim();
           }

           let experience = '';
           const expMatch = tdHtml.match(/<b>Experience:<\/b>\s*([^<]+)/);
           if (expMatch && expMatch[1]) {
               experience = expMatch[1].trim();
           }
           
           // avoid duplicates
           if (!profiles.find(p => p.name === name)) {
               profiles.push({ name, designation, imageSrc, profileUrl, researchArea, experience });
           }
        });
      }

      const outputFile = path.join(outputDir, `${wing.name.toLowerCase().replace(/\s+/g, '_')}_faculty.json`);
      fs.writeFileSync(outputFile, JSON.stringify(profiles, null, 2));
      console.log(`Saved ${profiles.length} profiles to ${outputFile}`);
      
    } catch (e) {
      console.error(`Error processing ${wing.name}:`, e);
    }
  }
}

scrapeFaculty();
