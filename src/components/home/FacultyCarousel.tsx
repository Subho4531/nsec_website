import React from 'react';
import FacultyCard from '../shared/FacultyCard';

export default function FacultyCarousel() {
  const faculty = [
    {
      name: "Dr. Piyali Chatterjee",
      designation: "Professor & HOD",
      researchArea: "Bioinformatics, Machine Learning",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxVzP5GgNpxX5fSxl53nj1l3f_ZTLQP78fTobDGwt2qO07fM_sDUcWsRcIhRdtPK6USQ8e3XezPHNsS3NG5qEcL3AMEiytBJF39AYl0pMEWPRrnsOcCyWrCmikgTfEh9idTB94yKQK1E4sIONH9J3aSZRB2pC1A0ZAEApyNNJH0YpcaEzGSpze-mCFNX1MJtS9-rHLNWvw_vEEWzaJmjHp2AINvzrl6-q3kCsjyS_smvYkzBg28O73bkDyxyEmcWeumCxmR_PGFY"
    },
    {
      name: "Dr. Chandra Das",
      designation: "Associate Professor",
      researchArea: "Bioinformatics, Image Processing",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAWph9T3_7P_Re80MMOFOnJohSq8uVFjvBfoSWFAmxSnLj8hinGK5Yk4b14A2ISp-tPb3YcyExCuikX2JX6dViF4fgoMs-r4fdmNCD-TWrUU_g0rpZ82f1XxnMKhkngaEz0c6KPuHsIabhjdkdkL2DO4dQoo0IRSh6I2uO6NhKrVpVg5Ivp7sxVqVKfpxa2kj4_Meqr5_rUGGuV3GIqDKfCIJ7mKh3RCDlQ9xNj-DSymSJMFhTXhAz31gAvaAlEbjwbnnNID0jOGI"
    },
    {
      name: "Dr. Suvendu Chattaraj",
      designation: "Associate Professor",
      researchArea: "Machine Learning, Signal Processing",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRHKDQT05tCwZECI7vbEyLZR21mDo_5-13ETZ7UukhYn5MiX73KIAyYbqdDhiX8IJNDCS5EeXBi2Zh7uQKa0wu4HTzmNKm_bJu8ctGNiRPXND631YDqZqGNxCMQpAGBh8Jhu9h6a0WhUh78I05_HXNdxBXxZjfHGb8v29xWXVVebRc5KLzdsKAcDI-ccxRmunMQ1jO-EE8c1rP0DVaH4uRtdGDVqHglBnyK7awXmvbTymfbYS7U3VSL3ghO19ZJjfLEXLK0chtfI"
    },
    {
      name: "Mr. Saumen Sarkar",
      designation: "Assistant Professor",
      researchArea: "LMS using AI",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRHKDQT05tCwZECI7vbEyLZR21mDo_5-13ETZ7UukhYn5MiX73KIAyYbqdDhiX8IJNDCS5EeXBi2Zh7uQKa0wu4HTzmNKm_bJu8ctGNiRPXND631YDqZqGNxCMQpAGBh8Jhu9h6a0WhUh78I05_HXNdxBXxZjfHGb8v29xWXVVebRc5KLzdsKAcDI-ccxRmunMQ1jO-EE8c1rP0DVaH4uRtdGDVqHglBnyK7awXmvbTymfbYS7U3VSL3ghO19ZJjfLEXLK0chtfI"
    },
    {
      name: "Ms. Rituparna Pal",
      designation: "Assistant Professor",
      researchArea: "Machine Learning",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAWph9T3_7P_Re80MMOFOnJohSq8uVFjvBfoSWFAmxSnLj8hinGK5Yk4b14A2ISp-tPb3YcyExCuikX2JX6dViF4fgoMs-r4fdmNCD-TWrUU_g0rpZ82f1XxnMKhkngaEz0c6KPuHsIabhjdkdkL2DO4dQoo0IRSh6I2uO6NhKrVpVg5Ivp7sxVqVKfpxa2kj4_Meqr5_rUGGuV3GIqDKfCIJ7mKh3RCDlQ9xNj-DSymSJMFhTXhAz31gAvaAlEbjwbnnNID0jOGI"
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
