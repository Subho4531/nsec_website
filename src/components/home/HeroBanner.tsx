import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg")' }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center text-white scroll-animate">
        <span className="inline-block px-4 py-1.5 text-white font-label-sm text-label-sm rounded-sm uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          Established 1998
        </span>
        <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-4 leading-tight max-w-4xl font-extrabold uppercase tracking-tight">
          Department of Computer Science &amp; Engineering
        </h2>
        <div className="w-24 h-1.5 bg-tertiary-container mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(186,26,26,0.5)]"></div>
      </div>
    </section>
  );
}
