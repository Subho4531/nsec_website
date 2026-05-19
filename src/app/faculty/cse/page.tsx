import React from 'react';
import FacultyDepartmentLayout from '@/components/shared/FacultyDepartmentLayout';
import cseFacultyData from '@/data/cse_faculty.json';

export const metadata = {
  title: 'Faculty - Computer Science & Engineering | NSEC',
  description: 'Meet the Computer Science & Engineering (CSE) faculty team at Netaji Subhash Engineering College (NSEC). Experts in algorithms, systems, and software architectures.',
};

export default function CseFacultyPage() {
  const overviewText = "The Department of Computer Science & Engineering (CSE) at Netaji Subhash Engineering College is one of the premier academic branches. Founded to deliver cutting-edge technical education, the department covers foundational algorithms, compiler designs, computer networks, and advanced software engineering methodologies.";

  const stats = [
    { value: "180+", label: "B.Tech Intake" },
    { value: "26 Yrs", label: "Max Experience" },
    { value: "20+", label: "Active Faculty" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="CSE"
        deptFullName="B.Tech in Computer Science & Engineering"
        overviewText={overviewText}
        facultyList={cseFacultyData}
        stats={stats}
      />
    </main>
  );
}
