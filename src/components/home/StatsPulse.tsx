import React from 'react';

export default function StatsPulse() {
  return (
    <section className="py-16 bg-surface-container-low border-y border-outline-variant/20 scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
        <div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
          <span className="font-stats-number text-stats-number text-primary mb-2">27+</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Years Legacy
          </span>
        </div>
        <div className="flex flex-col items-center md:border-l border-outline-variant/30 md:px-4 hover:-translate-y-1 transition-transform duration-300">
          <span className="font-stats-number text-stats-number text-primary mb-2">5000+</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Alumni Globally
          </span>
        </div>
        <div className="flex flex-col items-center md:border-l border-outline-variant/30 md:px-4 hover:-translate-y-1 transition-transform duration-300">
          <span className="font-stats-number text-stats-number text-primary mb-2">95%</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Avg Placements
          </span>
        </div>
        <div className="flex flex-col items-center md:border-l border-outline-variant/30 md:px-4 hover:-translate-y-1 transition-transform duration-300">
          <span className="font-stats-number text-stats-number text-primary mb-2">50+</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Ph.D. Faculty
          </span>
        </div>
      </div>
    </section>
  );
}
