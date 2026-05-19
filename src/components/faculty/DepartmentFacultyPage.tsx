'use client';

import React, { useState, useMemo } from 'react';

interface FacultyMember {
  name: string;
  designation: string;
  imageSrc: string;
  profileUrl: string;
  researchArea: string;
  experience: string;
}

interface DepartmentFacultyPageProps {
  departmentName: string;
  specializationName: string;
  facultyData: FacultyMember[];
  keywords: string[];
  stats: {
    labs: string;
    studentRatio: string;
    publications: string;
  };
}

export default function DepartmentFacultyPage({
  departmentName,
  specializationName,
  facultyData,
  keywords,
  stats,
}: DepartmentFacultyPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'professor' | 'associate' | 'assistant' | 'core'>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Helper to check if a faculty member matches the specialization keywords
  const isSpecializationCore = (member: FacultyMember) => {
    if (!member.researchArea) return false;
    const area = member.researchArea.toLowerCase();
    return keywords.some((keyword) => area.includes(keyword.toLowerCase()));
  };

  // Calculate dynamic stats
  const pageStats = useMemo(() => {
    const totalCount = facultyData.length;
    
    // Core specialization count
    const coreCount = facultyData.filter(isSpecializationCore).length;

    // Parse average experience
    let totalExp = 0;
    let validExpCount = 0;
    facultyData.forEach((member) => {
      if (member.experience) {
        const years = parseInt(member.experience.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(years)) {
          totalExp += years;
          validExpCount++;
        }
      }
    });
    const avgExperience = validExpCount > 0 ? (totalExp / validExpCount).toFixed(1) : 'N/A';

    return {
      total: totalCount,
      core: coreCount,
      avgExp: avgExperience,
    };
  }, [facultyData, keywords]);

  // Filter and Search logic
  const filteredFaculty = useMemo(() => {
    return facultyData.filter((member) => {
      // 1. Search Query Filter
      const nameMatch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
      const researchMatch = member.researchArea.toLowerCase().includes(searchQuery.toLowerCase());
      const designationMatch = member.designation.toLowerCase().includes(searchQuery.toLowerCase());
      const queryMatches = nameMatch || researchMatch || designationMatch;

      if (!queryMatches) return false;

      // 2. Tab Filter
      if (activeFilter === 'all') return true;
      if (activeFilter === 'core') return isSpecializationCore(member);
      
      const des = member.designation.toLowerCase();
      if (activeFilter === 'professor') {
        return des.includes('professor') && !des.includes('associate') && !des.includes('assistant');
      }
      if (activeFilter === 'associate') {
        return des.includes('associate');
      }
      if (activeFilter === 'assistant') {
        return des.includes('assistant');
      }

      return true;
    });
  }, [facultyData, searchQuery, activeFilter, keywords]);

  return (
    <main className="pt-[88px] min-h-screen bg-surface text-on-surface">
      {/* Breadcrumbs & Header Section */}
      <section className="py-8 bg-white/20 backdrop-blur-md border-b border-black/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="flex items-center gap-2 text-xs font-label-sm text-on-surface-variant uppercase tracking-wider mb-4">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface-variant/60">Faculty</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-bold">{specializationName}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 text-primary font-label-sm text-xs rounded-sm uppercase tracking-widest bg-primary/5 border border-primary/10 mb-3">
                {departmentName}
              </span>
              <h1 className="font-headline-xl text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
                {specializationName} Faculty
              </h1>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.nsec.ac.in/fps/page.php?id=419"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary-container text-white px-6 py-2.5 font-label-sm text-xs uppercase tracking-widest rounded-sm font-bold hover:bg-error hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              >
                Apply for Admission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid & Department Info */}
      <section className="py-12 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Intro Card */}
          <div className="lg:col-span-2 glass-panel border border-white/40 p-8 rounded-xl flex flex-col justify-center shadow-sm">
            <h3 className="font-headline-md text-xl text-primary font-bold mb-4">
              Academic Excellence & Specialized Training
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Our B.Tech in CSE specializing in {specializationName} combines core computer science engineering concepts with focused training in modern paradigms. The department leverages our extensive faculty pool, consisting of veteran professors and active researchers, to deliver an industry-aligned curriculum supported by state-of-the-art laboratory infrastructure.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel border border-white/40 p-5 rounded-xl text-center flex flex-col justify-center items-center shadow-xs">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">groups</span>
              <span className="font-stats-number text-2xl md:text-3xl text-primary font-extrabold block">
                {pageStats.total}
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                Total Faculty
              </span>
            </div>
            <div className="glass-panel border border-white/40 p-5 rounded-xl text-center flex flex-col justify-center items-center shadow-xs">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">military_tech</span>
              <span className="font-stats-number text-2xl md:text-3xl text-primary font-extrabold block">
                {pageStats.core}
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                Core Specialists
              </span>
            </div>
            <div className="glass-panel border border-white/40 p-5 rounded-xl text-center flex flex-col justify-center items-center shadow-xs">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">history_edu</span>
              <span className="font-stats-number text-2xl md:text-3xl text-primary font-extrabold block">
                {pageStats.avgExp} Yrs
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                Avg. Experience
              </span>
            </div>
            <div className="glass-panel border border-white/40 p-5 rounded-xl text-center flex flex-col justify-center items-center shadow-xs">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">lab_research</span>
              <span className="font-stats-number text-2xl md:text-3xl text-primary font-extrabold block">
                {stats.labs}
              </span>
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                Specialized Labs
              </span>
            </div>
          </div>
        </div>

        {/* Search, Filter & Grid Container */}
        <div className="glass-panel border border-white/30 rounded-2xl p-6 md:p-8 shadow-sm">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mb-8 pb-6 border-b border-black/5">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-sm font-label-sm text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-primary text-white font-bold'
                    : 'bg-black/5 text-on-surface-variant hover:bg-black/10'
                }`}
              >
                All Faculty
              </button>
              {pageStats.core > 0 && (
                <button
                  onClick={() => setActiveFilter('core')}
                  className={`px-4 py-2 rounded-sm font-label-sm text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeFilter === 'core'
                      ? 'bg-tertiary-container text-white font-bold'
                      : 'bg-tertiary-container/5 text-tertiary-container border border-tertiary-container/10 hover:bg-tertiary-container/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">stars</span>
                  Core Specialists
                </button>
              )}
              <button
                onClick={() => setActiveFilter('professor')}
                className={`px-4 py-2 rounded-sm font-label-sm text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'professor'
                    ? 'bg-primary text-white font-bold'
                    : 'bg-black/5 text-on-surface-variant hover:bg-black/10'
                }`}
              >
                Professors
              </button>
              <button
                onClick={() => setActiveFilter('associate')}
                className={`px-4 py-2 rounded-sm font-label-sm text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'associate'
                    ? 'bg-primary text-white font-bold'
                    : 'bg-black/5 text-on-surface-variant hover:bg-black/10'
                }`}
              >
                Associate Profs
              </button>
              <button
                onClick={() => setActiveFilter('assistant')}
                className={`px-4 py-2 rounded-sm font-label-sm text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === 'assistant'
                    ? 'bg-primary text-white font-bold'
                    : 'bg-black/5 text-on-surface-variant hover:bg-black/10'
                }`}
              >
                Assistant Profs
              </button>
            </div>

            {/* Search Box */}
            <div className="relative min-w-[280px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 text-xl">
                search
              </span>
              <input
                type="text"
                placeholder="Search name, research..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-black/15 bg-white/50 focus:bg-white rounded-sm font-body-md text-sm outline-hidden focus:border-primary transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant/50 hover:text-primary transition-colors text-lg"
                >
                  close
                </button>
              )}
            </div>
          </div>

          {/* Faculty Cards Grid */}
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((member, idx) => {
                const isCore = isSpecializationCore(member);
                return (
                  <div
                    key={idx}
                    className="flex flex-col glass-panel border border-white/40 p-5 rounded-xl shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
                  >
                    {isCore && (
                      <div className="absolute top-0 right-0 bg-tertiary-container text-white px-3 py-1 text-[9px] font-label-sm uppercase tracking-wider rounded-bl-lg font-bold flex items-center gap-1 shadow-md z-10 animate-pulse">
                        <span className="material-symbols-outlined text-[10px]">stars</span>
                        Specialist
                      </div>
                    )}
                    <div className="relative w-full h-44 rounded-lg overflow-hidden bg-black/5 mb-4 flex items-center justify-center">
                      <img
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={member.imageSrc || 'https://www.nsec.ac.in/fps/images/logo.png'}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://www.nsec.ac.in/fps/images/logo.png';
                        }}
                      />
                    </div>
                    <h4 className="font-headline-md text-base text-primary font-bold line-clamp-1 mb-1">
                      {member.name}
                    </h4>
                    <p className="font-label-sm text-[10px] text-on-secondary-fixed-variant uppercase tracking-widest mb-3 line-clamp-1">
                      {member.designation}
                    </p>
                    {member.experience && (
                      <p className="font-body-sm text-xs text-on-surface-variant/80 mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                        Experience: {member.experience}
                      </p>
                    )}
                    {member.researchArea && (
                      <div className="font-body-sm text-xs text-on-surface-variant leading-relaxed line-clamp-2 mb-4 flex-1">
                        <strong className="text-primary font-semibold">Research:</strong> {member.researchArea}
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedFaculty(member)}
                      className="w-full border border-primary/20 bg-primary/5 text-primary py-2 font-label-sm text-[10px] rounded-sm font-bold hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest mt-auto flex items-center justify-center gap-1"
                    >
                      View Details
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">
                person_search
              </span>
              <h5 className="font-headline-md text-lg text-primary font-bold mb-2">
                No Faculty Members Found
              </h5>
              <p className="font-body-md text-sm text-on-surface-variant max-w-md">
                We couldn't find any faculty members matching "{searchQuery}" under this filter. Try adjusting your search query or switching tabs.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Details Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedFaculty(null)}
          />
          <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleIn flex flex-col md:flex-row">
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-primary flex items-center justify-center transition-colors z-20"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Left Column - Image */}
            <div className="md:w-2/5 bg-black/5 relative min-h-[220px] md:min-h-full flex items-center justify-center">
              <img
                alt={selectedFaculty.name}
                className="w-full h-full object-cover"
                src={selectedFaculty.imageSrc || 'https://www.nsec.ac.in/fps/images/logo.png'}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.nsec.ac.in/fps/images/logo.png';
                }}
              />
              {isSpecializationCore(selectedFaculty) && (
                <div className="absolute bottom-4 left-4 bg-tertiary-container text-white px-3 py-1.5 text-xs font-label-sm uppercase tracking-wider rounded-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  Core Specialist
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="p-8 md:w-3/5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-label-sm text-on-secondary-fixed-variant uppercase tracking-widest font-bold block mb-1">
                  {selectedFaculty.designation}
                </span>
                <h3 className="font-headline-lg text-2xl text-primary font-extrabold mb-6 leading-tight">
                  {selectedFaculty.name}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">school</span>
                    <div>
                      <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">
                        Department
                      </span>
                      <span className="font-body-md text-sm text-primary font-medium">
                        Computer Science & Engineering
                      </span>
                    </div>
                  </div>

                  {selectedFaculty.experience && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">schedule</span>
                      <div>
                        <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">
                          Teaching Experience
                        </span>
                        <span className="font-body-md text-sm text-primary font-medium">
                          {selectedFaculty.experience}
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedFaculty.researchArea && (
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">lab_research</span>
                      <div>
                        <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider block">
                          Research Areas
                        </span>
                        <span className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                          {selectedFaculty.researchArea}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedFaculty.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white py-3 px-4 font-label-sm text-xs uppercase tracking-widest rounded-sm font-bold hover:bg-tertiary-container text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  Official NSEC Profile
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="border border-black/15 hover:bg-black/5 py-3 px-6 font-label-sm text-xs uppercase tracking-widest rounded-sm font-bold text-primary transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
