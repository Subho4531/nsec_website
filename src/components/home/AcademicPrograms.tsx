'use client';

import React, { useState } from 'react';
import ProgramCard from '../shared/ProgramCard';

export default function AcademicPrograms() {
  const [showAll, setShowAll] = useState(false);

  const programs = [
    {
      title: "B.Tech in CSE",
      description: "Flagship program offering a comprehensive foundation in computing theories, software design, computer systems, and full-stack development.",
      icon: "computer",
      link: "/faculty/cse"
    },
    {
      title: "B.Tech in CSE (AIML)",
      description: "Focuses on building intelligent machines using deep learning, NLP, computer vision, and neural network algorithms.",
      icon: "psychology",
      link: "/faculty/aiml"
    },
    {
      title: "B.Tech in CSE (DS)",
      description: "Covers big data structures, statistical analysis, data engineering, and predictive algorithms to discover hidden data insights.",
      icon: "analytics",
      link: "/faculty/data-science"
    },
    {
      title: "B.Tech in CSE (CS)",
      description: "Specialized training in ethical hacking, cryptography, security protocols, network defense, and system auditing.",
      icon: "security",
      link: "/faculty/cyber-security"
    },
    {
      title: "B.Tech in CSE (IoT)",
      description: "Examines sensor systems, connected architecture, embedded software, and wireless technology for smart automation environments.",
      icon: "router",
      link: "/faculty/iot"
    },
    {
      title: "B.Tech in CSBS",
      description: "Curated in partnership with TCS, aligning technical computer science engineering skills with business leadership, design thinking, and management.",
      icon: "business_center",
      link: "/faculty/csbs"
    },
    {
      title: "B.Tech in AI & DS",
      description: "Combines computing systems with statistics, machine learning pipelines, and database optimization to solve real-world industry problems.",
      icon: "insights",
      link: "/faculty/ai-ds"
    }
  ];

  const displayedPrograms = showAll ? programs : programs.slice(0, 3);

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="text-center mb-16">
        <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest mb-4 block font-bold text-primary/60 border-b border-primary/10 w-fit mx-auto pb-1">
          Comprehensive Curriculum
        </span>
        <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
          Specialized Programs
        </h3>
        <p className="max-w-2xl mx-auto font-body-md text-on-surface-variant">
          Designed to align with emerging technological trends and industry requirements. Explore our specialized B.Tech streams.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
        {displayedPrograms.map((prog, idx) => (
          <ProgramCard key={idx} {...prog} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="border-2 border-primary text-primary px-8 py-3 font-label-sm text-label-sm rounded-sm font-bold hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg uppercase tracking-widest cursor-pointer"
        >
          {showAll ? "Show Less Streams" : "View All Courses"}
        </button>
      </div>
    </section>
  );
}
