import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12 bg-primary text-white border-t border-primary-fixed/20">
      <div className="max-w-sm">
        <div className="flex items-center gap-3 mb-6 bg-white p-2 rounded-sm w-fit">
          <img
            alt="NSEC Logo"
            className="h-10 object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujYpo7B3GVtOnBt3_FENsmrh8ajdl8SzY7V8-D4g9zEI_bq2S9BOPrDfrhnJY1GN1jhlYBFq7uKoaQ6pbnmDJ6_NikxbrtKGghc8ximtyAVrgv6adOgd08B-5BZ8sOovHeaFPTUwuWBHWSHNVH81X_6FHSjZk6BpOgAc2Z4QuYjjNUfPp1Z1QfNANvZVwSch1nD7x2koJMhsOykoa0w27B7bgFr-q580-AKF3tt4x9HqaNknxSbD1C1"
          />
        </div>
        <p className="font-body-md text-white/70 mb-6 leading-relaxed">
          Techno City, Panchpota, Garia<br />
          Kolkata 700152, West Bengal, India<br />
          Tel.: 03324361285
        </p>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-tertiary-container hover:border-tertiary-container hover:scale-110 transition-all duration-300"
            href="https://www.nsec.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            title="NSEC Main Website"
          >
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-tertiary-container hover:border-tertiary-container hover:scale-110 transition-all duration-300"
            href="https://www.nsec.ac.in/fps/"
            target="_blank"
            rel="noopener noreferrer"
            title="Faculty Portal"
          >
            <span className="material-symbols-outlined text-lg">groups</span>
          </a>
          <a
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-tertiary-container hover:border-tertiary-container hover:scale-110 transition-all duration-300"
            href="https://www.nsec.ac.in/admission-criteria.php"
            target="_blank"
            rel="noopener noreferrer"
            title="Admissions"
          >
            <span className="material-symbols-outlined text-lg">school</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
        <div>
          <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs font-label-sm">
            Academics
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-body-sm text-sm"
                href="/#programs"
              >
                B.Tech Programs
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-body-sm text-sm"
                href="https://www.nsec.ac.in/mtech-courses.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                M.Tech Programs
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-body-sm text-sm"
                href="https://www.nsec.ac.in/syllabus.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum &amp; Syllabus
              </a>
            </li>
            <li>
              <a
                className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-body-sm text-sm"
                href="https://www.nsec.ac.in/academic-calendar.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Academic Calendar
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-white mb-6 uppercase tracking-widest text-xs font-label-sm">
            Important Links
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-body-sm text-sm"
                href="https://www.nsec.ac.in/nba.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                NBA Accreditation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
