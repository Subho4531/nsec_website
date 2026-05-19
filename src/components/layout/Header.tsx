'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto backdrop-blur-md z-50 border-b border-black/10 transition-all duration-300 bg-white/40 backdrop-blur-xl"
        id="site-header"
      >
        <div className="flex items-center gap-4">
          <img
            alt="NSEC Logo"
            className="h-10 object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujYpo7B3GVtOnBt3_FENsmrh8ajdl8SzY7V8-D4g9zEI_bq2S9BOPrDfrhnJY1GN1jhlYBFq7uKoaQ6pbnmDJ6_NikxbrtKGghc8ximtyAVrgv6adOgd08B-5BZ8sOovHeaFPTUwuWBHWSHNVH81X_6FHSjZk6BpOgAc2Z4QuYjjNUfPp1Z1QfNANvZVwSch1nD7x2koJMhsOykoa0w27B7bgFr-q580-AKF3tt4x9HqaNknxSbD1C1"
          />
          <h1 className="font-headline-md text-xl md:text-headline-md font-extrabold text-primary tracking-tighter">
            NETAJI SUBHASH ENGINEERING COLLEGE
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-primary font-bold border-b-2 border-tertiary-container pb-1 font-label-sm text-label-sm uppercase tracking-widest hover:text-tertiary-container transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="#"
          >
            Programs
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="#"
          >
            Faculty
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="#"
          >
            Placements
          </a>
          <a
            className="bg-tertiary-container text-white px-6 py-2 font-label-sm text-label-sm uppercase tracking-widest rounded-sm hover:bg-error hover:scale-105 active:scale-95 transition-all duration-300"
            href="#"
          >
            Apply Now
          </a>
        </nav>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-primary hover:text-tertiary-container transition-colors"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 z-[101] md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-black/10">
          <span className="font-bold text-primary font-headline-md tracking-tighter">NSEC CSE</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-primary hover:text-tertiary-container transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-primary font-bold font-label-sm text-sm uppercase tracking-widest hover:text-tertiary-container transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="#"
          >
            Programs
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="#"
          >
            Faculty
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="#"
          >
            Placements
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="bg-tertiary-container text-white px-6 py-3 font-label-sm text-sm uppercase tracking-widest rounded-sm hover:bg-error transition-all duration-300 text-center font-bold"
            href="#"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </>
  );
}
