// import Image from "next/image";
"use client"
import React from "react";
import GetInTouch from "../../components/GetInTouch";
import {
  blogs,
  courses,

} from "./data/home";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import Link from "next/link";
import MockTestSection from "../../components/MockTestSection";

import BlogCard from "../../components/BlogCard";
import { useTranslations } from "next-intl";
import { CalendarCheck, Map, MapPinned, Stethoscope, Workflow } from "lucide-react";
import { LineChart } from 'lucide-react';
import { Book } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { FaBook, FaFlag, FaCompass } from "react-icons/fa";




const HomePage: React.FC = () => {
  const t =useTranslations();
  const steps = t.raw("home.Steps.StepSection");
  const promises = t.raw("home.promiseCards.promiseCardContent");
  const states = t.raw("home.StatesSection.StateContent");
  const courses = t.raw("home.Courses.CourseCards");
  const blogs = t.raw("home.BlogSection.blogContent")

  const icons: JSX.Element[] = [
    <CalendarCheck key="calendar" size={48} strokeWidth={1.5} />,
    <Stethoscope key="stethoscope" size={48} strokeWidth={1.5} />,
    <MapPinned key="map" size={48} strokeWidth={1.5} />,
    <Workflow key="workflow" size={48} strokeWidth={1.5} />,
  ];
  const promiseIcons: JSX.Element[] = [
  <Map size={48} strokeWidth={1.5} />,
  <LineChart size={48} strokeWidth={1.5} />,
  <Book size={48} strokeWidth={1.5} />,
  <CalendarDays size={48} strokeWidth={1.5} />,
  ];

  const statesIcon: JSX.Element[] = [
    <FaBook className="text-6xl text-sky-800" />,
    <FaFlag className="text-6xl text-sky-800" />,
    <FaCompass className="text-6xl text-sky-800" />,
  ]

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
            {steps.map((StepSection,index) => (
              
            
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-teal-600 text-white rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                {icons[index]}
                </div>
                <h3 className="text-xl font-semibold mb-2">{StepSection.title} </h3>
                <p className="text-sm">{StepSection.description}</p>
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
                  <p className="text-gray-600">{t('home.SomethingAboutUs.PE')}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
                {t('home.SomethingAboutUs.BNBTN')}
                </button>
                <button className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">
                {t('home.SomethingAboutUs.CNBTN')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}

      <section className="text-center py-16">
        <h3 className="text-lg font-semibold text-gray-900">
        {t('home.StatSection.find')}
        </h3>
        <h2 className="text-3xl font-bold text-blue-800 mt-2">
        {t('home.StatSection.TopographicalTitle')}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        {t('home.StatSection.TopographicalDescription')}
        </p>
        <div className="mt-6">
          <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
          {t('home.StatSection.StartTest')}
          </button>
        </div>
      </section>

      

      <MockTestSection/>

      {/* Promise Section */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-4">{t('home.promiseSection.promiseTitle')}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        {t('home.promiseSection.promiseDescription')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {promises.map((promiseCardContent, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-full mb-4">
                {promiseIcons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{promiseCardContent.title}</h3>
              <p className="text-gray-600">{promiseCardContent.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {states.map((StateContent, index) => (
              <div key={index} className="text-slate-800">
                <div className="flex justify-center mb-4">{statesIcon[index]}</div>
                <h3 className="text-4xl font-bold">{StateContent.value}</h3>
                <hr className="my-4 border-t-2 border-gray-400 w-1/2 mx-auto" />
                <p className="text-lg font-semibold">{StateContent.label}</p>
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
            {t('home.ourCourseSection.CourseTitle')}
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
            {t('home.ourCourseSection.CoursePlanTitle')}
            </h2>
            <p className="text-gray-600 mt-2">
            {t('home.ourCourseSection.CourseShortDes')}
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((Courses, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg p-6 text-center transition-shadow duration-300 
                ${
                  Courses.isPopular
                    ? "border-purple-600 bg-purple-50 shadow-xl"
                    : "border-gray-200 hover:shadow-lg"
                }`}
              >
                {/* Most Popular Badge */}
                {Courses.isPopular && (
                  <div className="bg-purple-600 text-white text-xs font-bold rounded-full px-4 py-1 mb-4 inline-block">
                    {t("home.ourCourseSection.CardHeroTitle")}
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-800">
                  {Courses.title}
                </h3>
                <p className="text-sm text-gray-600">{Courses.description}</p>

                <div className="my-4">
                  <span className="text-4xl font-bold text-gray-800">
                    ${Courses.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    {" "}
                    / {Courses.duration}
                  </span>
                </div>

                <button className="bg-purple-600 text-white rounded-md py-2 px-4 w-full hover:bg-purple-700 transition duration-300">
                {t("home.ourCourseSection.CP")}
                </button>

                <ul className="text-left mt-6 space-y-2">
        {/* Assuming `features` array is defined elsewhere in your code */}
        {Courses.features && Courses.features.map((feature, idx) => (
          <li key={idx} className="text-gray-600 flex items-start">
            <span className="text-green-600 font-bold mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>

                {/* <Link
                  href={courses.link}
                  className="text-purple-600 mt-4 inline-block hover:underline"
                >
                  See all features »
                </Link> */}
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
             {t("home.BlogSectionHeader.header")}
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
            {t("home.BlogSectionHeader.shortTitle")}
            </h2>
            <p className="text-gray-600 mt-2">
            {t("home.BlogSectionHeader.blogHeaderDes")}
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blogContent, index) => (
              <BlogCard key={index} blog={blogContent} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link href="/blogs">
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
                {t("home.BlogSectionHeader.Button")}
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
