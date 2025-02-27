"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "../../components/QuestionCard";
import questions from "../data/questions.json";

export default function Exam() {
  const router = useRouter();
  const [hasStarted, setHasStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Start Exam
  const startExam = () => {
    setHasStarted(true);
  };

  // Timer Logic
  useEffect(() => {
    if (!hasStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time's up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted]);

  // Handle Option Selection
  const handleSelect = (id: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  // Handle Exam Submission
  const handleSubmit = () => {
    localStorage.setItem("answers", JSON.stringify(answers));
    router.push("/exam/results");
  };

  // Format Time for Display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      {!hasStarted ? (
       
        <div className="relative bg-opacity-50 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto mt-10 text-center bg-white">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
            Exam Guidelines
          </h1>
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1484/1484916.png"
              alt="Guidelines"
              className="w-28 h-28 animate-pulse"
            />
          </div>
          <p className="text-red-600 text-lg font-semibold mb-4">
            Please read the guidelines carefully before starting the exam.
          </p>
          <ul className="text-left text-gray-700 list-none space-y-4 mb-8 mx-8">
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-blue-600 font-bold text-lg mr-3">
                Schedule:
              </span>
              <span>
                You will have <span className="font-semibold">30 minutes</span>{" "}
                to complete the exam.
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-green-600 text-lg font-bold mr-3">
                Fact_check:
              </span>
              <span>
                Each question has{" "}
                <span className="font-semibold">4 options</span>. Only one is
                correct.
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-red-600 text-lg font-bold mr-3">Cancel:</span>
              <span>
                Once you submit,{" "}
                <span className="font-semibold">
                  you cannot change your answers
                </span>
                .
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-yellow-600 text-lg font-bold mr-3">
                Insights:
              </span>
              <span>
                Your results will be displayed{" "}
                <span className="font-semibold">after submission</span>.
              </span>
            </li>
          </ul>
          <button
            onClick={startExam}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          >
            Start Exam
          </button>
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-lg"></div>
        </div>
      ) : (
        // Exam Section
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">MCQ Exam</h1>
            <div className="text-red-600 font-bold">
              Time Left: {formatTime(timeLeft)}
            </div>
          </div>
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q.question}
              options={q.options}
              selectedOption={answers[q.id] || null}
              onSelect={(option) => handleSelect(q.id, option)}
            />
          ))}
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit Exam
          </button>
        </div>
      )}
    </div>
  );
}
