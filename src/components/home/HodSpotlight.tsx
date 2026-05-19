import React from 'react';

export default function HodSpotlight() {
  return (
    <section className="bg-surface-container-low py-24 relative overflow-hidden border-y border-outline-variant/30 scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-4 relative group">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-container/10 rounded-full blur-3xl group-hover:bg-tertiary-container/20 transition-colors duration-500"></div>
          <div className="relative rounded-sm overflow-hidden border-8 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
            <img
              alt="Dr. Piyali Chatterjee"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugRqGkTsmwSrKQeqfMjqsPd4BPIOywBw7X3bAgwPhe0G4IlbXlB2q13r541aJHrOleuerDhg3-s50VYM9FwRFToslK5T7Cvm0th515Xw7SMz0_kBfZHNh_fT8qhyd2s76dDUAwCoeNHlhBRkj6aHi4FOoCGXr7nqHlTeyN-6UAqnqmNU1d-NB5M3CodIJH1KhM_QcKXVyKG76MUlB17YirYjl_zFbEUiN9xD8-GzrTwRUF6WMWI1ZsQ"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest mb-4 block font-bold text-primary/60 border-b border-primary/10 w-fit mx-auto pb-1">
            Message from the Head of Department
          </span>
          <h3 className="font-headline-lg md:text-headline-xl text-3xl text-primary mb-8 leading-tight font-extrabold">
            Shaping Thought Leaders &amp; Innovators
          </h3>
          <blockquote className="mb-10 relative pl-8 border-l-4 border-tertiary-container border-l border-primary/20">
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed mb-4">
              &ldquo;Welcome to the Department of Computer Science &amp; Engineering at Netaji Subhash Engineering College. It is an honor to lead a department that has consistently demonstrated a commitment to academic excellence, innovation, and professional growth.&rdquo;
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
              &ldquo;At the CSE department, we believe in shaping not just engineers but thought leaders and innovators who can adapt to and lead in a rapidly changing technological environment. Our curriculum is crafted to provide a strong theoretical foundation coupled with hands-on learning experiences, ensuring our graduates are industry-ready and research-capable.&rdquo;
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              &ldquo;Through our robust placement programs, industry collaborations, and alumni network, we aim to provide our students with unparalleled opportunities to achieve their aspirations.&rdquo;
            </p>
          </blockquote>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h5 className="font-headline-md text-lg text-primary font-bold">Dr. Piyali Chatterjee</h5>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">
                Professor &amp; HOD, CSE
              </p>
            </div>
            <a
              className="bg-primary text-white px-8 py-3 rounded-sm font-label-sm text-label-sm uppercase tracking-widest font-bold hover:bg-tertiary-container hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-300 text-center"
              href="mailto:hod.cse@nsec.ac.in"
            >
              Contact HOD
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
