import React from 'react';
import FacultyCard from '../shared/FacultyCard';

export default function FacultyCarousel() {
  const faculty = [
    {
      name: "Dr. Piyali Chatterjee",
      designation: "Professor & HOD",
      researchArea: "Bioinformatics, Machine Learning",
      imageSrc: "https://www.nsec.ac.in/fps/images/1747200952.jpg"
    },
    {
      name: "Dr. Chandra Das",
      designation: "Associate Professor",
      researchArea: "Bioinformatics, Image Processing",
      imageSrc: "https://www.nsec.ac.in/fps/images/1595507212.jpeg"
    },
    {
      name: "Dr. Suvendu Chattaraj",
      designation: "Associate Professor",
      researchArea: "Machine Learning, Signal Processing",
      imageSrc: "https://www.nsec.ac.in/fps/images/1746529616.jpg"
    },
    {
      name: "Mr. Saumen Sarkar",
      designation: "Assistant Professor",
      researchArea: "LMS using AI",
      imageSrc: "https://www.nsec.ac.in/fps/images/1596016214.jpg"
    },
    {
      name: "Ms. Rituparna Pal",
      designation: "Assistant Professor",
      researchArea: "Machine Learning",
      imageSrc: "https://www.nsec.ac.in/fps/images/1747299062.jpg"
    }
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <div className="text-center">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest mb-4 block font-bold text-primary/60 border-b border-primary/10 w-fit mx-auto pb-1">
            Our Mentors
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
            Distinguished Faculty
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Experts shaping the future of computer science
          </p>
        </div>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-6 px-margin-mobile md:px-margin-desktop">
          {/* Duplicated list for seamless infinite marquee scrolling */}
          {[...faculty, ...faculty].map((member, idx) => (
            <FacultyCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
