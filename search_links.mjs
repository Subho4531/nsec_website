import fs from 'fs';

const html = fs.readFileSync('cse_raw.html', 'utf8');
const links = html.match(/<a[^>]*href=\"([^\"]+)\"[^>]*>([^<]+)/gi);
if (links) {
  links.forEach(l => {
    const text = l.toLowerCase();
    if (text.includes('cyber') || text.includes('data science') || text.includes('iot') || text.includes('ai & ds')) {
      console.log(l);
    }
  });
}
