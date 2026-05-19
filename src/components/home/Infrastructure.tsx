import React from 'react';

export default function Infrastructure() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-animate transition-all duration-700 ease-out delay-100 opacity-100 translate-y-0">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest mb-2 block font-bold text-primary/60 border-b border-primary/10 w-fit pb-1">
            World-Class Infrastructure
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
            Advanced Laboratories &amp; Facilities
          </h3>
          <p className="font-body-md text-on-surface-variant">
            Advanced laboratories and computing facilities equipped with state-of-the-art tools and technologies to support pioneering research areas such as Artificial Intelligence, Machine Learning, and Big Data Analytics.
          </p>
        </div>
        <a className="font-label-sm text-label-sm font-bold text-primary border-b-2 border-primary pb-1 uppercase tracking-widest whitespace-nowrap hover:text-tertiary-container hover:border-tertiary-container transition-colors" href="#">
          Take Virtual Tour
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 overflow-hidden rounded-sm group shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <img
            alt="Lab session"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujo7AmpPN6W8i2LFFS7ok3XPoIdU5OcS0y9ZyLKhiZnNEvhOF50xBV2IKOQ-5sScwK67wEbHAiJK7BASFJGJoXazuTPJ3d3gkT0mrch9PmxqHiWbdsCJbGl0OLYB46tplzDdyQZQ96Vqmh24BYmoO8XHf2xDzU-Oz0hUAi5ZkmSx3xMXqie8jsznMZbncbMF5Y2F1u-UkRBApkV6fQGkV51FWnj8fHiCqff3kZI8pyJO58ZrfrjFM_i"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 text-white">
            <span className="text-white font-label-sm text-xs px-2 py-1 rounded-sm w-fit mb-3 uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/10">
              Research Excellence
            </span>
            <h4 className="font-headline-md text-2xl mb-2 group-hover:translate-y-0 transition-transform duration-300">
              AI &amp; Machine Learning Lab
            </h4>
            <p className="font-body-md text-white/80 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              Active engagement in pioneering research areas utilizing high-performance computing clusters.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-6 items-center bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/20 group hover:bg-white/60 hover:shadow-lg transition-all duration-500 cursor-pointer">
            <div className="w-16 h-16 bg-primary/10 flex-shrink-0 flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <div>
              <h4 className="font-headline-md text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                IoT &amp; Sensor Networks
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant">
                Dedicated facility for smart environment architecture.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/20 group hover:bg-white/60 hover:shadow-lg transition-all duration-500 cursor-pointer">
            <div className="w-16 h-16 bg-primary/10 flex-shrink-0 flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">security</span>
            </div>
            <div>
              <h4 className="font-headline-md text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                Cyber Security Lab
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant">
                Advanced setups for ethical hacking and cryptography.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/20 group hover:bg-white/60 hover:shadow-lg transition-all duration-500 cursor-pointer">
            <div className="w-16 h-16 bg-primary/10 flex-shrink-0 flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">menu_book</span>
            </div>
            <div>
              <h4 className="font-headline-md text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                Digital Library &amp; e-Resources
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant">
                Extensive collection of journals and technical literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
