import React from 'react';

export default function IndustryPartnerships() {
  return (
    <section id="placements" className="py-24 bg-primary text-white text-center scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-widest mb-4 block font-bold text-primary/60 border-b border-primary/10 w-fit mx-auto pb-1">
          Industry Integration
        </span>
        <h3 className="font-headline-lg text-headline-lg mb-6">
          Strategic Partnerships &amp; Top Recruiters
        </h3>
        <p className="font-body-md text-white/80 max-w-3xl mx-auto mb-16">
          We maintain strong strategic partnerships with leading training and development organizations, ensuring our students receive industry-aligned training and secure positions in leading global companies.
        </p>
        <div className="overflow-hidden relative mb-12 opacity-80">
          <div className="animate-marquee items-center">
            {/* First Set */}
            <div className="flex items-center gap-12 md:gap-24 flex-nowrap pr-12 md:pr-24">
              <h4 className="text-2xl font-bold tracking-tighter">TCS</h4>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">Wipro</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">Accenture</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-xl font-bold tracking-tighter">Infosys Springboard</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Training Partner</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">EPAM</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Training Partner</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">NASSCOM</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Strategic Partner</span>
              </div>
            </div>
            {/* Second Set for infinite scroll illusion */}
            <div aria-hidden="true" className="flex items-center gap-12 md:gap-24 flex-nowrap pr-12 md:pr-24">
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">Capgemini</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">JP Morgan</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">Accenture</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Recruiter</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-xl font-bold tracking-tighter">Infosys Springboard</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Training Partner</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">EPAM</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Training Partner</span>
              </div>
              <div className="hover:opacity-100 hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center gap-2 cursor-pointer shrink-0">
                <h4 className="text-2xl font-bold tracking-tighter">NASSCOM</h4>
                <span className="text-xs font-label-sm uppercase tracking-widest mt-2 text-white/60">Strategic Partner</span>
              </div>
            </div>
          </div>
        </div>
        <p className="font-body-md text-white/60 italic">
          Including Dynamo AI, rtCamp, Cognizant, Dell Technologies, Virtusa and 200+ more organizations.
        </p>
        <div className="mt-12">
          <button className="border border-white/50 text-white px-8 py-3 font-label-sm text-label-sm rounded-sm font-bold hover:bg-white hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest">
            View Placement Statistics
          </button>
        </div>
      </div>
    </section>
  );
}
