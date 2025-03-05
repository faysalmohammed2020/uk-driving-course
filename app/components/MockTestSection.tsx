"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import all question sets
import questions1 from "@/app/(main)/[locale]/data/questions.json";
import questions2 from "@/app/(main)/[locale]/data/questions2.json";
import questions3 from "@/app/(main)/[locale]/data/questions3.json";
import questions4 from "@/app/(main)/[locale]/data/questions4.json";
import { useTranslations } from 'next-intl';


interface MockTest {
  id: number;
  title: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    answer: string;
  }[];
}

const MockTestSection = () => {
   
  const router = useRouter();
  const locale = useLocale();
  const [mockTests, setMockTests] = useState<MockTest[]>([]);

  // Load all question sets
  useEffect(() => {
    setMockTests([...questions1, ...questions2, ...questions3, ...questions4]);
  }, []);

  const startExam = (id: number) => {
     router.push(`/${locale}/exam/${id}`);
  };
  const t =useTranslations();
  return (
    <section className="bg-sky-900 text-white py-12 text-center">
      <h2 className="text-3xl font-bold">{t('home.MockTestSection.theoryTest')}</h2>
      <p className="mt-2 text-lg">
      {t('home.MockTestSection.testDescription')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-6 justify-center">
        {mockTests.map((test) => (
          <div
            key={test.id}
            className="relative bg-white text-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start border border-gray-200 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4 w-full">
              <div className="bg-green-500 text-white p-3 rounded-lg shadow-md">
                <FaFileAlt className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg text-left w-full line-clamp-2 hover:whitespace-normal hover:absolute hover:bg-white hover:p-3 hover:rounded-lg hover:shadow-lg">
                {test.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 text-left">
              {test.questions.length} Questions
            </p>
            <button
              onClick={() => startExam(test.id)}
              className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out w-full shadow-md hover:shadow-xl"
            >
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
  );
};

export default MockTestSection;
