import React from 'react';
import FacultyDepartmentLayout from '../../../components/shared/FacultyDepartmentLayout';
import iotFacultyData from '../../../../raw-stitch-code/data/iot_faculty.json';

export const metadata = {
  title: 'Faculty - Internet of Things | NSEC',
  description: 'Meet the Internet of Things (IoT) faculty team at Netaji Subhash Engineering College (NSEC). Experts in sensor networks, drone electronics, and embedded systems.',
};

export default function IotFacultyPage() {
  const overviewText = "The Department of Internet of Things (IoT) at Netaji Subhash Engineering College focuses on the network of physical devices embedded with sensors, software, and connectivity to exchange data. The program integrates hardware, wireless networks, federated learning, and system design for smart homes, cities, and modern industrial systems.";

  const stats = [
    { value: "50+", label: "Sensors & Nodes" },
    { value: "7+", label: "Embedded Experts" },
    { value: "10+", label: "Drone Tech Prototypes" }
  ];

  return (
    <main className="pt-[72px] flex-1">
      <FacultyDepartmentLayout
        deptName="Internet of Things"
        deptFullName="B.Tech in Computer Science & Engineering (IoT)"
        overviewText={overviewText}
        facultyList={iotFacultyData}
        stats={stats}
        heroImage="https://nsec.ac.in/images/gallery/cse/frontpage-2025-fac.jpeg"
      />
    </main>
  );
}
