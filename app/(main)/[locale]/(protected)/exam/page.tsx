"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import all question sets
import questions1 from "@/app/(main)/[locale]/data/questions.json";
import questions2 from "@/app/(main)/[locale]/data/questions2.json";
import questions3 from "@/app/(main)/[locale]/data/questions3.json";
import questions4 from "@/app/(main)/[locale]/data/questions4.json";
import questions5 from "@/app/(main)/[locale]/data/questions5.json";
import questions6 from "@/app/(main)/[locale]/data/questions6.json";
import questions7 from "@/app/(main)/[locale]/data/questions7.json";
import questions8 from "@/app/(main)/[locale]/data/questions8.json";
import questions9 from "@/app/(main)/[locale]/data/questions9.json";
import questions10 from "@/app/(main)/[locale]/data/questions10.json";
import questions11 from "@/app/(main)/[locale]/data/questions11.json";
import questions12 from "@/app/(main)/[locale]/data/questions12.json";

import questions13 from "@/app/(main)/[locale]/data/questions13.json";
import questions14 from "@/app/(main)/[locale]/data/questions14.json";
import questions15 from "@/app/(main)/[locale]/data/questions15.json";
import questions16 from "@/app/(main)/[locale]/data/questions16.json";
import questions17 from "@/app/(main)/[locale]/data/questions17.json";
import questions18 from "@/app/(main)/[locale]/data/questions18.json";
import questions19 from "@/app/(main)/[locale]/data/questions19.json";
import questions20 from "@/app/(main)/[locale]/data/questions20.json";
import questions21 from "@/app/(main)/[locale]/data/questions21.json";
import questions22 from "@/app/(main)/[locale]/data/questions22.json";
import questions23 from "@/app/(main)/[locale]/data/questions23.json";
import questions24 from "@/app/(main)/[locale]/data/questions24.json";
import questions25 from "@/app/(main)/[locale]/data/questions25.json";
import questions26 from "@/app/(main)/[locale]/data/questions26.json";
import questions27 from "@/app/(main)/[locale]/data/questions27.json";
import questions28 from "@/app/(main)/[locale]/data/questions28.json";
import questions29 from "@/app/(main)/[locale]/data/questions29.json";
import questions30 from "@/app/(main)/[locale]/data/questions30.json";
import { useSession } from "@/lib/auth-client";
import { setErrorMap } from "better-auth";
import { useLocale } from "next-intl";

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

const ITEMS_PER_PAGE = 8;

const ExamPage = () => {
  const router = useRouter();
  const [mockTests, setMockTests] = useState<MockTest[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [examResults, setExamResults] = useState<any[]>([]);
  const { data: session } = useSession();
  const userId = session?.user.id;
  const locale = useLocale();

  console.log("PassedExams::", examResults);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/exam?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch results");

        const data = await response.json();
        setExamResults(data);
      } catch (err: any) {
        setErrorMap(err.message);
      }
    };

    if (userId) {
      fetchResults();
    }
  }, [userId]);

  useEffect(() => {
    setMockTests([
      ...questions1,
      ...questions2,
      ...questions3,
      ...questions4,
      ...questions5,
      ...questions6,
      ...questions7,
      ...questions8,
      ...questions9,
      ...questions10,
      ...questions11,
      ...questions12,

      ...questions13,
      ...questions14,
      ...questions15,
      ...questions16,
      ...questions17,
      ...questions18,
      ...questions19,
      ...questions20,
      ...questions21,
      ...questions22,
      ...questions23,
      ...questions24,
      ...questions25,
      ...questions26,
      ...questions27,
      ...questions28,
      ...questions29,
      ...questions30,
    ]);
  }, []);

  const startExam = (id: number) => {
    router.push(`/${locale}/exam/${id}`);
  };

  const totalPages = Math.ceil(mockTests.length / ITEMS_PER_PAGE);
  const currentTests = mockTests.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Check if the user has passed the exam with the given examId
  const hasPassed = (examId: number) => {
    return examResults.some(
      (result) => result.examId === examId && result.status === "Passed"
    );
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-700 text-white py-16 text-center px-4">
      <h2 className="text-4xl font-extrabold">Topographical Theory Test</h2>
      <p className="mt-3 text-lg max-w-3xl mx-auto">
        We strongly advise you to read the handbook before starting our practice
        tests.
      </p>

      {/* Exam Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {currentTests.map((test) => (
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
            <h3 className="font-semibold text-lg text-left w-full line-clamp-2">
              {/* Display checkmark if the exam has been passed */}
              {hasPassed(test.id) && (
                <div className="flex gap-2">
                  <span className="text-green-600 font-semibold">Passed:</span>
                  <FaCheckCircle className="text-green-500 inline ml-2 size-6 mb-0" />
                </div>
              )}
            </h3>

            <button
              onClick={() => startExam(test.id)}
              className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out w-full shadow-md hover:shadow-xl"
            >
              Start Now
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`p-3 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12 ${
            currentPage === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          <IoIosArrowBack size={24} className="text-white" />
        </button>
        <span className="font-semibold text-lg bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`p-3 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12 ${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          <IoIosArrowForward size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default ExamPage;
