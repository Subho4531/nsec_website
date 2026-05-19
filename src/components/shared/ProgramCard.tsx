import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export default function ProgramCard({ title, description, icon, link = "#" }: ProgramCardProps) {
  return (
    <div className="border border-white/20 p-8 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group bg-white/40 backdrop-blur-lg">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h4 className="font-headline-md text-xl font-bold mb-3">{title}</h4>
      <p className="font-body-md text-on-surface-variant mb-6 h-20">{description}</p>
      <a className="inline-flex items-center gap-2 text-primary font-bold font-label-sm text-label-sm uppercase tracking-widest hover:text-tertiary-container transition-colors" href={link}>
        Explore Program <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
    </div>
  );
}

