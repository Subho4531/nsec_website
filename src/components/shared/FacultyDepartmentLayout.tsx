'use client';

import React, { useState, useMemo } from 'react';
import FacultyCard from './FacultyCard';

interface FacultyMember {
  name: string;
  designation: string;
  imageSrc: string;
  profileUrl?: string | null;
  researchArea?: string;
  experience?: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface FacultyDepartmentLayoutProps {
  deptName: string;
  deptFullName: string;
  overviewText: string;
  facultyList: FacultyMember[];
  heroImage?: string;
  stats?: StatItem[];
}

export default function FacultyDepartmentLayout({
  deptName,
  deptFullName,
  overviewText,
  facultyList,
  heroImage = "https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg",
  stats = [
    { value: "27+", label: "Years Legacy" },
    { value: "95%", label: "Placement Rate" },
    { value: "Tier-1", label: "Labs Setup" }
  ]
}: FacultyDepartmentLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  // Filter options based on designation
  const rolesList = useMemo(() => {
    const roles = new Set<string>();
    facultyList.forEach((f) => {
      // Normalize role names to group them easily if desired, or keep as-is
      if (f.designation) {
        roles.add(f.designation);
      }
    });
    return ['All', ...Array.from(roles)];
  }, [facultyList]);

  // Filtered faculty members
  const filteredFaculty = useMemo(() => {
    return facultyList.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.researchArea || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole =
        selectedRole === 'All' || member.designation === selectedRole;

      return matchesSearch && matchesRole;
    });
  }, [facultyList, searchQuery, selectedRole]);

  return (
    <div className="flex-1 bg-surface min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${heroImage}")` }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center text-white">
          <span className="inline-block px-4 py-1.5 text-white font-label-sm text-label-sm rounded-sm uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            Faculty Directory
          </span>
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-4 leading-tight max-w-4xl font-extrabold uppercase tracking-tight">
            {deptFullName}
          </h2>
          <div className="w-24 h-1 bg-tertiary-container mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(186,26,26,0.5)]"></div>
        </div>
      </section>

      {/* Overview & Statistics Section */}
      <section className="py-16 bg-surface-container-low border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 text-primary font-label-sm text-label-sm rounded-sm uppercase tracking-widest bg-primary/5 border border-primary/10">
                About the Department
              </span>
              <span className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                <span className="material-symbols-outlined text-sm">school</span> Academic Wing
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-4 font-extrabold">
              Fostering Technical Leaders in {deptName}
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {overviewText}
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-6 text-center lg:text-left lg:border-l border-outline-variant/30 lg:pl-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <span className="font-stats-number text-stats-number text-primary mb-1">{stat.value}</span>
                <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Listing Section */}
      <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-tertiary-container uppercase tracking-widest mb-2 block font-bold text-primary/60">
            Search Team
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary font-extrabold">
            Meet Our Experts
          </h3>
        </div>

        {/* Filter Controls (Local State) */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white/40 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-sm max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              type="text"
              placeholder="Search by name or research area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-outline-variant bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-on-surface"
            />
          </div>

          {/* Role Dropdown */}
          <div className="w-full md:w-64 relative">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-2.5 rounded-sm border border-outline-variant bg-white/60 appearance-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-on-surface pr-10"
            >
              {rolesList.map((role) => (
                <option key={role} value={role}>
                  {role === 'All' ? 'All Designations' : role}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* Grid Listing */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredFaculty.map((member, idx) => (
              <FacultyCard key={idx} {...member} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/20 border border-dashed border-outline-variant/50 rounded-xl max-w-md mx-auto">
            <span className="material-symbols-outlined text-4xl text-outline-variant mb-3">
              person_off
            </span>
            <p className="font-headline-md text-lg text-primary font-bold mb-1">No Faculty Found</p>
            <p className="font-body-md text-sm text-on-surface-variant">
              Try adjusting your filters or search query to find matching members.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
