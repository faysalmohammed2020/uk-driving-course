"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import all question sets
import questions1 from "@/app/(main)/data/questions.json";
import questions2 from "@/app/(main)/data/questions2.json";
import questions3 from "@/app/(main)/data/questions3.json";
import questions4 from "@/app/(main)/data/questions4.json";

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
  const [mockTests, setMockTests] = useState<MockTest[]>([]);

  // Load all question sets
  useEffect(() => {
    setMockTests([...questions1, ...questions2, ...questions3, ...questions4]);
  }, []);

  const startExam = (id: number) => {
    router.push(`/exam/${id}`);
  };

  return (
    <section className="bg-sky-900 text-white py-12 text-center">
      <h2 className="text-3xl font-bold">Topographical Theory Test</h2>
      <p className="mt-2 text-lg">
        We strongly advise you to read the handbook before starting our practice tests.
      </p>
      <div className="flex justify-center mt-8 gap-6 px-6 flex-wrap">
        {mockTests.map((test) => (
          <div
            key={test.id}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-start"
          >
            <div className="flex justify-between w-full items-center">
              <h3 className="font-semibold">{test.title}</h3>
              <FaFileAlt className="text-gray-500 text-2xl" />
            </div>
            <p className="mt-2 text-sm text-gray-700">
              {test.questions.length} Questions
            </p>
            <button
              onClick={() => startExam(test.id)}
              className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
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
