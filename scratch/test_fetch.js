async function test() {
  try {
    const res = await fetch('https://www.nsec.ac.in/fps/faculty_cyber.php');
    console.log('Status:', res.status);
    const html = await res.text();
    console.log('Length:', html.length);
    console.log('Snippet:', html.slice(0, 1000));
  } catch (e) {
    console.error(e);
  }
}
test();
