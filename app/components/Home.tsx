// import Image from "next/image";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RecentBlogs from "./RecentBlogs";
import Footer from "./Footer";
import OurCourses from "./OurCourses";
import SomethingAboutUs from "./SomethingAboutUs";
import GetInTouch from "./GetInTouch";
import StatisticsSection from "./StatisticsSection";
import StepsSection from './StepSections';
import PromiseSection from './PromiseSection';
const mockTests = [
  { id: 1, title: "SERU Grammer Mock Test – 2" },
  { id: 2, title: "SERU Grammer Mock Test – 1" },
  { id: 3, title: "Theory Mock Test 6" },
];
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[650px] flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/video_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-6xl font-bold">Master the SERU Test</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Prepare yourself for the TFL SERU Assessment with our comprehensive
            course designed to help you understand
            <span className="font-semibold">
              {" "}
              Safety, Equality, and Regulatory Understanding
            </span>
            . Our course covers everything you need to pass the computer-based
            test and become a certified PCO driver.
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-yellow-700 transition duration-300 shadow-md">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300 shadow-md">
              Try Free
            </button>
          </div>
        </div>
      </div>

      <StepsSection/>

      <SomethingAboutUs />




      {/* Stats Section */}

      <section className="text-center py-16">
        <h3 className="text-lg font-semibold text-gray-900">
          Find out more about the test
        </h3>
        <h2 className="text-3xl font-bold text-blue-800 mt-2">
          Topographical Theory Practice and Mock Test
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          This Topographical Theory test is provided to acquaint you with the
          format of the official test. You are advised to familiarise with the
          official A-Z Atlas handbook before attempting the test. The test
          consists of 25 questions for 25 marks; each question carrying 1 mark.
          Click the button below to start the test.
        </p>
        <div className="mt-6">
          <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
            START TEST
          </button>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Topographical Theory Test</h2>
        <p className="mt-2 text-lg">
          We strongly advise you to read the handbook before starting our
          practice tests.
        </p>
        <div className="flex justify-center mt-8 gap-6 px-6">
          {mockTests.map((test) => (
            <div
              key={test.id}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-start"
            >
              <div className="flex justify-between w-full items-center">
                <h3 className="font-semibold">{test.title}</h3>
                <FaFileAlt className="text-gray-500 text-2xl" />
              </div>
              <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition">
                Start Now
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
            <IoIosArrowBack size={24} />
          </button>
          <button className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition">
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </section>

      <PromiseSection/>

     <StatisticsSection />

      <OurCourses />

      <RecentBlogs />

      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
