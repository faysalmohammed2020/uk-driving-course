// import Image from "next/image";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import RecentBlogs from "./RecentBlogs";
import Footer from "./Footer";
import OurCourses from "./OurCourses";
import SomethingAboutUs from "./SomethingAboutUs";
import GetInTouch from "./GetInTouch";
const mockTests = [
  { id: 1, title: "SERU Grammer Mock Test – 2" },
  { id: 2, title: "SERU Grammer Mock Test – 1" },
  { id: 3, title: "Theory Mock Test 6" },
];
const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-4xl font-bold">What is SERU?</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            SERU stands for Safety, Equality, and Regulatory Understanding. TFL
            SERU Assessment Test is computer-based...
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-red-500 px-6 py-3 rounded-lg text-white">
              Enroll Now
            </button>
            <button className="bg-green-500 px-6 py-3 rounded-lg text-white">
              Try Free
            </button>
          </div>
        </div>
      </div>

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

      <div className="flex justify-center gap-10 py-10 bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">500+</h2>
          <p>Real Exam Questions</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">100%</h2>
          <p>Pass Rate</p>
        </div>
      </div>

      <OurCourses />

      <RecentBlogs />

      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
