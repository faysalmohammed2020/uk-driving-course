// components/StatisticsSection.tsx
"use client";

import React from "react";
import { FaBook, FaFlag, FaCompass } from "react-icons/fa";

const statistics = [
  {
    icon: <FaBook className="text-6xl text-sky-800" />,
    value: "800+",
    label: "STUDENTS",
  },
  {
    icon: <FaFlag className="text-6xl text-sky-800" />,
    value: "500+",
    label: "REAL EXAM QUESTIONS",
  },
  {
    icon: <FaCompass className="text-6xl text-sky-800" />,
    value: "100%",
    label: "PASS RATE",
  },
];

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="text-slate-800">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <hr className="my-4 border-t-2 border-gray-400 w-1/2 mx-auto" />
              <p className="text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
