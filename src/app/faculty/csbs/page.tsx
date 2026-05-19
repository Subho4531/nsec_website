import React from 'react';
import FacultyDepartmentLayout from '@/components/shared/FacultyDepartmentLayout';
import csbsFacultyData from '@/data/csbs_faculty.json';

export const metadata = {
  title: 'Faculty - CSBS | NSEC',
  description: 'Meet the Computer Science & Business Systems (CSBS) faculty team at Netaji Subhash Engineering College (NSEC). Bridging computer science principles with enterprise business management.',
};

export default function CsbsFacultyPage() {
  const overviewText = "Designed in collaboration with Tata Consultancy Services (TCS), the Computer Science & Business Systems (CSBS) curriculum prepares students for careers in the digital economy by blending software engineering, analytics, financial sciences, and enterprise management.";

  const stats = [
    { value: "60+", label: "B.Tech Intake" },
    { value: "20 Yrs", label: "Max Experience" },
    { value: "4", label: "Core Faculty" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="CSBS"
        deptFullName="B.Tech in Computer Science & Business Systems"
        overviewText={overviewText}
        facultyList={csbsFacultyData}
        stats={stats}
      />
    </main>
  );
}
