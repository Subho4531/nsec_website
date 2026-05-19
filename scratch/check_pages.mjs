const urls = [
  'https://www.nsec.ac.in/fps/faculty_cyber.php',
  'https://www.nsec.ac.in/fps/faculty_ds.php',
  'https://www.nsec.ac.in/fps/faculty_iot.php',
  'https://www.nsec.ac.in/fps/faculty_aids.php'
];

async function check() {
  for (const url of urls) {
    console.log(`Checking ${url}...`);
    try {
      const res = await fetch(url);
      console.log(`Status: ${res.status}`);
      const text = await res.text();
      console.log(`Length: ${text.length}`);
      
      // Let's see if there are any specific table rows or links in it
      const count1 = (text.match(/faculty.php\?id=/g) || []).length;
      const count2 = (text.match(/<tr/g) || []).length;
      console.log(`Found ${count1} faculty links, ${count2} tr elements\n`);
    } catch (e) {
      console.error(e);
    }
  }
}

check();
