'use client';

import React from 'react';

interface FacultyCardProps {
  name: string;
  designation: string;
  researchArea?: string;
  imageSrc: string;
  experience?: string;
  profileUrl?: string | null;
}

export default function FacultyCard({
  name,
  designation,
  researchArea,
  imageSrc,
  experience,
  profileUrl,
}: FacultyCardProps) {
  const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRHKDQT05tCwZECI7vbEyLZR21mDo_5-13ETZ7UukhYn5MiX73KIAyYbqdDhiX8IJNDCS5EeXBi2Zh7uQKa0wu4HTzmNKm_bJu8ctGNiRPXND631YDqZqGNxCMQpAGBh8Jhu9h6a0WhUh78I05_HXNdxBXxZjfHGb8v29xWXVVebRc5KLzdsKAcDI-ccxRmunMQ1jO-EE8c1rP0DVaH4uRtdGDVqHglBnyK7awXmvbTymfbYS7U3VSL3ghO19ZJjfLEXLK0chtfI";

  return (
    <div className="flex-shrink-0 w-full sm:w-[300px] glass-panel border border-white/20 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 border border-black/5 bg-surface-container group/img">
          <img
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            src={imageSrc || defaultImage}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = defaultImage;
            }}
          />
          {experience && (
            <span className="absolute top-2 right-2 bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
              {experience}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <h4 className="font-headline-md text-lg text-primary font-bold">{name}</h4>
          <p className="font-label-sm text-[10px] text-on-secondary-fixed-variant uppercase tracking-widest font-semibold">
            {designation}
          </p>
        </div>
        
        {researchArea && researchArea !== "N/A" && researchArea !== "Being pursued" && (
          <p className="font-body-sm text-sm text-on-surface-variant leading-snug mt-3 border-t border-black/5 pt-3">
            <strong className="text-primary font-semibold">Research:</strong> {researchArea}
          </p>
        )}
      </div>
      {profileUrl && (
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-secondary hover:text-tertiary-container font-bold font-label-sm text-[10px] uppercase tracking-wider transition-colors duration-200 mt-4 self-start"
        >
          View Profile
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      )}
    </div>
  );
}
