import React from 'react';
import FacultyDepartmentLayout from '../../../components/shared/FacultyDepartmentLayout';
import aidsFacultyData from '../../../../raw-stitch-code/data/ai_&_ds_faculty.json';

export const metadata = {
  title: 'Faculty - Artificial Intelligence & Data Science | NSEC',
  description: 'Meet the AI & DS faculty team at Netaji Subhash Engineering College (NSEC). Researching bioinformatics, neural networks, and generative models.',
};

export default function AiDsFacultyPage() {
  const overviewText = "The Department of Artificial Intelligence & Data Science (AI & DS) at Netaji Subhash Engineering College combines the principles of computing, mathematics, and data analytics to design intelligent systems. The curriculum integrates deep learning, generative AI, natural language processing, and medical image analytics to prepare students for core AI development and computational research.";

  const stats = [
    { value: "24+", label: "Core AI Experts" },
    { value: "100+", label: "GPU Instances" },
    { value: "50+", label: "AI/DS Publications" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="AI & DS"
        deptFullName="B.Tech in Artificial Intelligence & Data Science"
        overviewText={overviewText}
        facultyList={aidsFacultyData}
        stats={stats}
        heroImage="https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg"
      />
    </main>
  );
}
