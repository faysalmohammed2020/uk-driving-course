// import Image from "next/image";
"use client"
import React from "react";
import GetInTouch from "../../components/GetInTouch";
import {
  blogs,
  courses,
  mockTests,
  promises,
  statistics,
  steps,
} from "./data/home";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import Link from "next/link";
import MockTestSection from "../../components/MockTestSection";

import BlogCard from "../../components/BlogCard";
import { useTranslations } from "next-intl";



const HomePage: React.FC = () => {
  const t =useTranslations()
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
          <h1 className="text-6xl font-bold">{t('home.hero.title')}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            {t('home.hero.description')}
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-yellow-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-yellow-700 transition duration-300 shadow-md">
              {t('home.hero.enroll')}
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition duration-300 shadow-md">
              {t('home.hero.TryFree')}
            </button>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-teal-600 text-white rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
                <div className="mt-4 text-white text-lg">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Something About Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image */}
            <div className="w-full h-full">
              <Image
                src="/images/car_image.webp"
                alt="London Bus"
                className="w-full h-full object-cover rounded-lg shadow-md"
                width={800}
                height={600}
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('home.SomethingAboutUs.SomethingAboutUsTitle')}
              </h2>
              <p className="text-gray-600 mb-6">
              {t('home.SomethingAboutUs.SAUD')}
              </p>

              <div className="flex items-center mb-6">
                <FaAward className="text-teal-600 text-3xl mr-4" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">{t('home.SomethingAboutUs.Yrs')}</h4>
                  <p className="text-gray-600">Professional Experience!</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
                  Book Now
                </button>
                <button className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Mock Test Section */}
      {/* <section className="bg-sky-900 text-white py-12 text-center">
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
              <button  onClick={startExam} className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition">
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
      </section> */}

      <MockTestSection/>

      {/* Promise Section */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-4">OUR PROMISE</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We’ve helped thousands of people pass their topographical test. Here’s
          how we’re going to make you pass too!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-full mb-4">
                {promise.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
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

      {/* Our Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h3 className="text-purple-600 font-semibold text-lg uppercase">
              Our Courses
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
              Pick Your Perfect Plan
            </h2>
            <p className="text-gray-600 mt-2">
              Choose the best plan that fits your needs. Our courses are
              designed to help you learn at your own pace.
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg p-6 text-center transition-shadow duration-300 
                ${
                  course.isPopular
                    ? "border-purple-600 bg-purple-50 shadow-xl"
                    : "border-gray-200 hover:shadow-lg"
                }`}
              >
                {/* Most Popular Badge */}
                {course.isPopular && (
                  <div className="bg-purple-600 text-white text-xs font-bold rounded-full px-4 py-1 mb-4 inline-block">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.description}</p>

                <div className="my-4">
                  <span className="text-4xl font-bold text-gray-800">
                    ${course.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    {" "}
                    / {course.duration}
                  </span>
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

                <Link
                  href={course.link}
                  className="text-purple-600 mt-4 inline-block hover:underline"
                >
                  See all features »
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recent Blogs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h3 className="text-green-600 font-semibold text-lg uppercase">
              The Blog
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
              Our Recent News
            </h2>
            <p className="text-gray-600 mt-2">
              Here you can keep yourself updated by reading our blogs on the
              various topics ranging from licenses to other relevant topics. You
              can also subscribe to us in order to keep yourself informed of our
              services.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link href="/blogs">
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
                View All
              </button>
            </Link>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default HomePage;
