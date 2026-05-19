import React from 'react';

interface FacultyRowProps {
  name: string;
  designation: string;
  researchArea: string;
  imageSrc: string;
  experience?: string;
  profileUrl?: string | null;
}

export default function FacultyRow({
  name,
  designation,
  researchArea,
  imageSrc,
  experience,
  profileUrl
}: FacultyRowProps) {
  const defaultImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHRHKDQT05tCwZECI7vbEyLZR21mDo_5-13ETZ7UukhYn5MiX73KIAyYbqdDhiX8IJNDCS5EeXBi2Zh7uQKa0wu4HTzmNKm_bJu8ctGNiRPXND631YDqZqGNxCMQpAGBh8Jhu9h6a0WhUh78I05_HXNdxBXxZjfHGb8v29xWXVVebRc5KLzdsKAcDI-ccxRmunMQ1jO-EE8c1rP0DVaH4uRtdGDVqHglBnyK7awXmvbTymfbYS7U3VSL3ghO19ZJjfLEXLK0chtfI";

  return (
    <div className="glass-panel border border-white/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-black/10">
        <img
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={imageSrc || defaultImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {profileUrl ? (
            <a 
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline-md text-xl font-bold text-primary hover:text-secondary transition-colors duration-200"
            >
              {name}
            </a>
          ) : (
            <h4 className="font-headline-md text-xl font-bold text-primary">{name}</h4>
          )}
          <span className="inline-block px-2.5 py-0.5 bg-primary/5 border border-primary/10 rounded-sm font-label-sm text-[10px] text-primary uppercase tracking-wider font-semibold">
            {designation}
          </span>
        </div>
        
        {experience && (
          <p className="font-body-md text-sm text-secondary font-medium">
            <span className="opacity-75">Experience:</span> {experience}
          </p>
        )}
        
        {researchArea && researchArea !== "N/A" && researchArea !== "Being pursued" && (
          <div className="font-body-md text-sm text-on-surface-variant leading-relaxed bg-black/[0.02] p-3 rounded-sm border border-black/[0.03]">
            <strong className="text-primary font-semibold">Research Area: </strong>
            <span className="font-light">{researchArea}</span>
          </div>
        )}
      </div>
    </div>
  );
}
