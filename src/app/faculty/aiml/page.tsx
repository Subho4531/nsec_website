import React from 'react';
import FacultyDepartmentLayout from '@/components/shared/FacultyDepartmentLayout';
import aimlFacultyData from '@/data/aiml_faculty.json';

export const metadata = {
  title: 'Faculty - CSE (AIML) | NSEC',
  description: 'Meet the Computer Science & Engineering (Artificial Intelligence & Machine Learning) faculty team at Netaji Subhash Engineering College (NSEC). Researching deep learning, computer vision, and cognitive systems.',
};

export default function AimlFacultyPage() {
  const overviewText = "The Department of Computer Science & Engineering specializing in Artificial Intelligence & Machine Learning (AIML) focuses on constructing systems that learn, reason, and act. The coursework and labs cover advanced deep learning networks, natural language processors, intelligence algorithms, and computer vision systems.";

  const stats = [
    { value: "60+", label: "B.Tech Intake" },
    { value: "25 Yrs", label: "Max Experience" },
    { value: "12+", label: "Core Researchers" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="CSE (AIML)"
        deptFullName="B.Tech in CSE (Artificial Intelligence & Machine Learning)"
        overviewText={overviewText}
        facultyList={aimlFacultyData}
        stats={stats}
      />
    </main>
  );
}
