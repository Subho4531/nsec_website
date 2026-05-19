import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import DepartmentOverview from "../components/home/DepartmentOverview";
import StatsPulse from "../components/home/StatsPulse";
import AcademicPrograms from "../components/home/AcademicPrograms";
import HodSpotlight from "../components/home/HodSpotlight";
import FacultyCarousel from "../components/home/FacultyCarousel";
import Infrastructure from "../components/home/Infrastructure";
import IndustryPartnerships from "../components/home/IndustryPartnerships";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main className="pt-[72px] flex-1">
      <HeroBanner />
      <DepartmentOverview />
      <StatsPulse />
      <AcademicPrograms />
      <HodSpotlight />
      <FacultyCarousel />
      <Infrastructure />
      <IndustryPartnerships />
      <CallToAction />
    </main>
  );
}
