import React from 'react';

export default function DepartmentOverview() {
  return (
    <section className="py-24 bg-surface scroll-animate transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 text-primary font-label-sm text-label-sm rounded-sm uppercase tracking-widest bg-primary/5 border border-primary/10">
              Department Overview
            </span>
            <span className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">verified</span> NBA Accredited
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 leading-tight font-extrabold">
            Engineering the Future: 27 Years of Excellence
          </h2>
          <p className="font-body-md md:font-body-lg text-on-surface-variant mb-8 leading-relaxed">
            The Department of Computer Science and Engineering at Netaji Subhash Engineering College was established in 1998 and is a well-known center for academic excellence. With expert faculty, state-of-the-art infrastructure, and a strong industry orientation, the department empowers students with the skills and adaptability required to excel in rapidly evolving domains such as Artificial Intelligence, Data Science, Cyber Security, and Quantum Computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-tertiary-container text-white px-8 py-3 font-label-sm text-label-sm rounded-sm font-bold hover:bg-error hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest">
              Apply Now
            </button>
            <button className="border border-primary/20 bg-primary/5 text-primary px-8 py-3 font-label-sm text-label-sm rounded-sm font-bold hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest backdrop-blur-sm">
              Virtual Tour
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative p-2 glass-panel border border-white/40 rounded-xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              alt="Engineering Students"
              className="rounded-lg shadow-lg w-full max-w-[600px] h-auto object-cover aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujVNQufdj6xzqf3_anKy_N0hCIog8uVYG_PR7ilXXwQx1id4y42mdybhgJpyBarSjNBClKuSo--bclezDBBHZPq3JqyloMA5pr1zF6WL9PxjToJaxDUlfxztuwpA31Rif4cgwF8s0ACgrBpTvUbB5bcHHU4y8-CI79mujRzyGSxwWq6jsVdNECeSO_aLICYtNgV5vD-PtuYZvI_NaUGg7sHhYomC1WRxUBuZ-5NaDRmusSYbgj_vJibwQU"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-container/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
