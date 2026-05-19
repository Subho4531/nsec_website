import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'raw-stitch-code', 'data');

const cse = JSON.parse(fs.readFileSync(path.join(dataDir, 'cse_faculty.json'), 'utf8'));
const aiml = JSON.parse(fs.readFileSync(path.join(dataDir, 'aiml_faculty.json'), 'utf8'));
const csbs = JSON.parse(fs.readFileSync(path.join(dataDir, 'csbs_faculty.json'), 'utf8'));

// Combine all faculty members
const allFaculty = [...cse, ...aiml, ...csbs];

// De-duplicate by name
const uniqueFaculty = [];
const seenNames = new Set();
for (const member of allFaculty) {
  if (!seenNames.has(member.name)) {
    seenNames.add(member.name);
    uniqueFaculty.push(member);
  }
}

console.log(`Total unique faculty: ${uniqueFaculty.length}`);

// Classify faculty based on research areas
const cyber = [];
const ds = [];
const iot = [];
const aids = [];

uniqueFaculty.forEach(member => {
  const ra = (member.researchArea || '').toLowerCase();
  
  // Cyber Security
  if (
    ra.includes('cryptography') || 
    ra.includes('security') || 
    ra.includes('steganography') || 
    ra.includes('criminology')
  ) {
    cyber.push(member);
  }
  
  // Data Science
  if (
    ra.includes('data science') || 
    ra.includes('data mining') || 
    ra.includes('big data') || 
    ra.includes('data analysis') || 
    ra.includes('database') || 
    ra.includes('prediction') ||
    ra.includes('mining') ||
    ra.includes('cloud computing')
  ) {
    ds.push(member);
  }
  
  // IoT
  if (
    ra.includes('iot') || 
    ra.includes('internet of things') || 
    ra.includes('sensor') || 
    ra.includes('drone') ||
    ra.includes('localization')
  ) {
    iot.push(member);
  }
  
  // AI & DS
  if (
    ra.includes('ai') || 
    ra.includes('machine learning') || 
    ra.includes('ml') || 
    ra.includes('deep learning') || 
    ra.includes('neural') || 
    ra.includes('soft computing') || 
    ra.includes('intelligence') || 
    ra.includes('pattern recognition') || 
    ra.includes('natural language') || 
    ra.includes('nlp') ||
    ra.includes('image processing') ||
    ra.includes('image analysis') ||
    ra.includes('generative') ||
    ra.includes('bioinformatics')
  ) {
    aids.push(member);
  }
});

// Fallback: If any list is empty, populate it with some relevant faculty
// For example, if cyber is empty (though it shouldn't be), add some default ones.
console.log(`Cyber Security faculty count: ${cyber.length}`);
console.log(`Data Science faculty count: ${ds.length}`);
console.log(`IoT faculty count: ${iot.length}`);
console.log(`AI & DS faculty count: ${aids.length}`);

fs.writeFileSync(path.join(dataDir, 'cyber_security_faculty.json'), JSON.stringify(cyber, null, 2));
fs.writeFileSync(path.join(dataDir, 'data_science_faculty.json'), JSON.stringify(ds, null, 2));
fs.writeFileSync(path.join(dataDir, 'iot_faculty.json'), JSON.stringify(iot, null, 2));
fs.writeFileSync(path.join(dataDir, 'ai_&_ds_faculty.json'), JSON.stringify(aids, null, 2));

console.log('Seeding complete.');
