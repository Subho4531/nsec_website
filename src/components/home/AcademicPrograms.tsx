import React from 'react';
import ProgramCard from '../shared/ProgramCard';

export default function AcademicPrograms() {
  const programs = [
    {
      title: "B.Tech in CSE (AIML)",
      description: "Specialized program focusing on Artificial Intelligence and Machine Learning paradigms, preparing students for intelligent system design.",
      icon: "psychology",
      link: "/faculty/ai-ds"
    },
    {
      title: "B.Tech in CSE (DS)",
      description: "Deep dive into Data Science, big data analytics, and statistical modeling to extract actionable insights from complex datasets.",
      icon: "analytics",
      link: "/faculty/data-science"
    },
    {
      title: "B.Tech in CSE (IoT)",
      description: "Focusing on Internet of Things, connected devices architecture, and sensor networks for smart environments.",
      icon: "router",
      link: "/faculty/iot"
    }
  ];


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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <ProgramCard key={idx} {...prog} />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="border-2 border-primary text-primary px-8 py-3 font-label-sm text-label-sm rounded-sm font-bold hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg uppercase tracking-widest">
          View All Courses
        </button>
      </div>
    </section>
  );
}
