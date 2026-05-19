import React from 'react';
import FacultyDepartmentLayout from '@/components/shared/FacultyDepartmentLayout';
import dsFacultyData from '@/data/data_science_faculty.json';

export const metadata = {
  title: 'Faculty - Data Science | NSEC',
  description: 'Meet the Data Science faculty team at Netaji Subhash Engineering College (NSEC). Experts in big data, pattern recognition, and machine learning.',
};

export default function DataScienceFacultyPage() {
  const overviewText = "The Department of Data Science at Netaji Subhash Engineering College prepares students to extract actionable insights from big data using statistical modeling, data mining, and machine learning. The curriculum covers data engineering, predictive analysis, visualization, and cloud database systems to address data-driven industrial challenges.";

  const stats = [
    { value: "100%", label: "Big Data Clusters" },
    { value: "8+", label: "Data Experts" },
    { value: "20+", label: "Analytics Tools" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="Data Science"
        deptFullName="B.Tech in Computer Science & Engineering (Data Science)"
        overviewText={overviewText}
        facultyList={dsFacultyData}
        stats={stats}
        heroImage="https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg"
      />
    </main>
  );
}
