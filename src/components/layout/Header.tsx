'use client';

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileFacultyOpen, setIsMobileFacultyOpen] = useState(false);

  const facultyDepartments = [
    { name: "B.Tech in CSE", href: "/faculty/cse" },
    { name: "B.Tech in CSE (AIML)", href: "/faculty/aiml" },
    { name: "B.Tech in CSE (DS)", href: "/faculty/data-science" },
    { name: "B.Tech in CSE (CS)", href: "/faculty/cyber-security" },
    { name: "B.Tech in CSE (IoT)", href: "/faculty/iot" },
    { name: "B.Tech in CSBS", href: "/faculty/csbs" },
    { name: "B.Tech in AI & DS", href: "/faculty/ai-ds" }
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4  mx-auto backdrop-blur-md z-50 border-b border-black/10 transition-all duration-300 bg-white/40 backdrop-blur-xl"
        id="site-header"
      >
        <a href="/" className="flex items-center gap-4 group">
          <img
            alt="NSEC Logo"
            className="h-10 object-contain group-hover:scale-105 transition-transform"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujYpo7B3GVtOnBt3_FENsmrh8ajdl8SzY7V8-D4g9zEI_bq2S9BOPrDfrhnJY1GN1jhlYBFq7uKoaQ6pbnmDJ6_NikxbrtKGghc8ximtyAVrgv6adOgd08B-5BZ8sOovHeaFPTUwuWBHWSHNVH81X_6FHSjZk6BpOgAc2Z4QuYjjNUfPp1Z1QfNANvZVwSch1nD7x2koJMhsOykoa0w27B7bgFr-q580-AKF3tt4x9HqaNknxSbD1C1"
          />
          <h1 className="font-headline-md text-base md:text-lg font-extrabold text-primary tracking-tighter group-hover:text-primary/80 transition-colors">
            NETAJI SUBHASH ENGINEERING COLLEGE
          </h1>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="/"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="/#programs"
          >
            Programs
          </a>

          {/* Desktop Faculty Dropdown */}
          <div className="relative group py-2">
            <button className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-1 cursor-pointer">
              Faculty <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="px-4 py-2 border-b border-black/5 mb-1">
                <span className="font-bold text-[10px] uppercase tracking-widest text-primary/60">CSE Departments</span>
              </div>
              {facultyDepartments.map((dept, idx) => (
                <a
                  key={idx}
                  href={dept.href}
                  className="block px-4 py-2 text-xs text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors font-semibold uppercase tracking-wider"
                >
                  {dept.name}
                </a>
              ))}
            </div>
          </div>

          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-sm text-label-sm uppercase tracking-widest"
            href="/#placements"
          >
            Placements
          </a>
          <a
            className="bg-tertiary-container text-white px-6 py-2.5 font-label-sm text-label-sm uppercase tracking-widest rounded-sm hover:bg-tertiary-container/90 hover:scale-105 active:scale-95 transition-all duration-300 font-bold"
            href="https://www.nsec.ac.in/fps/page.php?id=419"
            target="_blank"
            rel="noopener noreferrer"
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
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="/"
          >
            Home
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="/#programs"
          >
            Programs
          </a>

          {/* Mobile Collapsible Faculty Accordion */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setIsMobileFacultyOpen(!isMobileFacultyOpen)}
              className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary flex items-center justify-between transition-colors duration-200 w-full text-left"
            >
              <span>Faculty</span>
              <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileFacultyOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>
            
            <div className={`flex flex-col pl-4 border-l border-black/10 gap-3 overflow-hidden transition-all duration-300 ${isMobileFacultyOpen ? 'max-h-[350px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              {facultyDepartments.map((dept, idx) => (
                <a
                  key={idx}
                  onClick={() => setIsMenuOpen(false)}
                  href={dept.href}
                  className="text-on-surface-variant/80 hover:text-primary font-semibold text-xs uppercase tracking-wider"
                >
                  {dept.name}
                </a>
              ))}
            </div>
          </div>

          <a
            onClick={() => setIsMenuOpen(false)}
            className="text-on-surface-variant font-medium font-label-sm text-sm uppercase tracking-widest hover:text-primary transition-colors duration-200"
            href="/#placements"
          >
            Placements
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            className="bg-tertiary-container text-white px-6 py-3 font-label-sm text-sm uppercase tracking-widest rounded-sm hover:bg-tertiary-container/95 transition-all duration-300 text-center font-bold"
            href="https://www.nsec.ac.in/fps/page.php?id=419"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </>
  );
}
