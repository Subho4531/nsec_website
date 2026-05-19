import React from 'react';
import FacultyDepartmentLayout from '@/components/shared/FacultyDepartmentLayout';
import cyberFacultyData from '@/data/cyber_security_faculty.json';

export const metadata = {
  title: 'Faculty - Cyber Security | NSEC',
  description: 'Meet the Cyber Security faculty team at Netaji Subhash Engineering College (NSEC). Experts in Cryptography, IoT security, and network defenses.',
};

export default function CyberSecurityFacultyPage() {
  const overviewText = "The Department of Cyber Security at Netaji Subhash Engineering College focuses on safeguarding digital assets, network security, threat intelligence, and digital forensics. Students learn cryptography, ethical hacking, secure programming, and regulatory compliance to address modern cybersecurity challenges and secure cloud-native environments.";

  const stats = [
    { value: "100%", label: "Secure Lab Sandbox" },
    { value: "8+", label: "Security Experts" },
    { value: "15+", label: "Research Projects" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="Cyber Security"
        deptFullName="B.Tech in Computer Science & Engineering (Cyber Security)"
        overviewText={overviewText}
        facultyList={cyberFacultyData}
        stats={stats}
        heroImage="https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg"
      />
    </main>
  );
}
