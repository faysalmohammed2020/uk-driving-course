// components/OurCourses.tsx
"use client";

import React from "react";
import Link from "next/link";

interface Course {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  link: string;
}

const courses: Course[] = [
  {
    title: "Basic Course",
    price: "2.99",
    duration: "per month",
    description: "Everything you need to get started.",
    features: [
      "10 Lessons",
      "Video Tutorials",
      "Downloadable Resources",
      "Community Access",
      "Basic Support",
    ],
    link: "/courses/basic",
  },
  {
    title: "Professional Course",
    price: "3.99",
    duration: "per month",
    description: "Level up with advanced features and support.",
    features: [
      "20 Lessons",
      "Advanced Video Tutorials",
      "Exclusive Resources",
      "Community & Forum Access",
      "Priority Support",
    ],
    isPopular: true,
    link: "/courses/professional",
  },
  {
    title: "Expert Course",
    price: "7.99",
    duration: "per month",
    description: "Gain expert knowledge and premium support.",
    features: [
      "30+ Lessons",
      "Expert Video Series",
      "1-on-1 Mentoring",
      "Complete Resources",
      "Dedicated Support",
    ],
    link: "/courses/expert",
  },
];

const OurCourses: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-purple-600 font-semibold text-lg uppercase">Our Courses</h3>
          <h2 className="text-3xl font-bold text-gray-800">Pick Your Perfect Plan</h2>
          <p className="text-gray-600 mt-2">
            Choose the best plan that fits your needs. Our courses are designed to help you learn at your own pace.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`border-2 rounded-lg p-6 text-center transition-shadow duration-300 
                ${course.isPopular ? "border-purple-600 bg-purple-50 shadow-xl" : "border-gray-200 hover:shadow-lg"}`}
            >
              {/* Most Popular Badge */}
              {course.isPopular && (
                <div className="bg-purple-600 text-white text-xs font-bold rounded-full px-4 py-1 mb-4 inline-block">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600">{course.description}</p>

              <div className="my-4">
                <span className="text-4xl font-bold text-gray-800">${course.price}</span>
                <span className="text-sm text-gray-600"> / {course.duration}</span>
              </div>

              <button className="bg-purple-600 text-white rounded-md py-2 px-4 w-full hover:bg-purple-700 transition duration-300">
                Choose Plan
              </button>

              <ul className="text-left mt-6 space-y-2">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={course.link} className="text-purple-600 mt-4 inline-block hover:underline">
                See all features »
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
