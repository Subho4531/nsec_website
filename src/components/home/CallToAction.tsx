import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 p-12 md:p-24 rounded-2xl relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-tr-full -z-0 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1 rounded-sm mb-6 border border-primary/10 hover:bg-primary/10 transition-colors cursor-default">
            <span className="material-symbols-outlined text-tertiary-container text-sm">campaign</span>
            <span className="font-label-sm text-xs font-bold text-primary uppercase tracking-widest">
              Admissions Open 2025-26
            </span>
          </div>
          <h2 className="font-headline-xl text-4xl md:text-5xl text-primary mb-6 font-extrabold tracking-tight">
            Begin Your Engineering Odyssey
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
            Join a vibrant community of learning, discovery, and impact. Applications for the Academic Session 2025-26 are now open for all Computer Science &amp; Engineering programs. Limited seats available for high-potential candidates.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-tertiary-container text-white px-10 py-4 font-label-sm text-sm rounded-sm hover:bg-error hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl font-bold uppercase tracking-widest">
              Apply for 2025-26
            </button>
            <button className="bg-white text-primary px-10 py-4 border-2 border-primary font-label-sm text-sm rounded-sm hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span> Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
