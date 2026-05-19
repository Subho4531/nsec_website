import * as cheerio from 'cheerio';

async function test() {
  try {
    const res = await fetch('https://www.nsec.ac.in/fps/faculty_cyber.php');
    const html = await res.text();
    const $ = cheerio.load(html);
    
    console.log('Title:', $('title').text());
    console.log('All links containing faculty.php?id=:');
    $('a[href*="faculty.php?id="]').each((i, el) => {
      console.log($(el).text(), $(el).attr('href'));
    });
    
    console.log('Number of tables:', $('table').length);
    console.log('Number of rows in all tables:', $('tr').length);
    
    // Let's print out some snippets of text in the page that might contain "Faculty"
    $('h1, h2, h3, h4, h5, h6').each((i, el) => {
      console.log('Heading:', $(el).text().trim());
    });
  } catch (e) {
    console.error(e);
  }
}
test();
