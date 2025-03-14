"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSession } from "@/lib/auth-client";
import QuestionCard from "@/app/components/QuestionCard";

const ExamWithId = () => {
  const router = useRouter();
  const { id } = useParams();
  const examId = useMemo(() => Number.parseInt(id as string), [id]);
  const { data: session } = useSession();
  const userId = session?.user.id;

  const t = useTranslations();

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [examTitle, setExamTitle] = useState("");

  
  useEffect(() => {
    let quizData = null;

    if (examId === 100) quizData = t.raw("quiz");
    else if (examId === 200) quizData = t.raw("quiz2");
    else if (examId === 300) quizData = t.raw("quiz3");
    else if (examId === 400) quizData = t.raw("quiz4");
    else if (examId === 500) quizData = t.raw("quiz5");
    else if (examId === 600) quizData = t.raw("quiz6");
    else if (examId === 700) quizData = t.raw("quiz7");
    else if (examId === 800) quizData = t.raw("quiz8");
    else if (examId === 900) quizData = t.raw("quiz9");
    else if (examId === 1000) quizData = t.raw("quiz10");
    else if (examId === 1100) quizData = t.raw("quiz11");
    else if (examId === 1200) quizData = t.raw("quiz12");
    else if (examId === 1300) quizData = t.raw("quiz13");
    else if (examId === 1400) quizData = t.raw("quiz14");
    else if (examId === 1500) quizData = t.raw("quiz15");
    else if (examId === 1600) quizData = t.raw("quiz16");
    else if (examId === 1700) quizData = t.raw("quiz17");
    else if (examId === 1800) quizData = t.raw("quiz18");
    else if (examId === 1900) quizData = t.raw("quiz19");
    else if (examId === 2000) quizData = t.raw("quiz20");
    else if (examId === 2100) quizData = t.raw("quiz21");
    else if (examId === 2200) quizData = t.raw("quiz22");
    else if (examId === 2300) quizData = t.raw("quiz23");
    else if (examId === 2400) quizData = t.raw("quiz24");
    else if (examId === 2500) quizData = t.raw("quiz25");
    else if (examId === 2600) quizData = t.raw("quiz26");
    else if (examId === 2700) quizData = t.raw("quiz27");
    else if (examId === 2800) quizData = t.raw("quiz28");
    else if (examId === 2900) quizData = t.raw("quiz29");
    else if (examId === 3000) quizData = t.raw("quiz30");

    if (quizData) {
      setSelectedQuestions(quizData.questions); // Set questions
      setExamTitle(quizData.title); // Set exam title
    }
  }, [examId, t]);

  // Timer Logic
  useEffect(() => {
    if (!hasStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted]);

  console.log("Selected Questions:", selectedQuestions);
  // Handle Option Selection
  const handleSelect = useCallback((questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }, []);

  // Handle Exam Submission
  const handleSubmit = useCallback(async () => {
    const userConfirmation = confirm(
      "Are you sure you want to submit the exam?"
    );
    if (!userConfirmation) return;

    const totalQuestions = selectedQuestions.length;
    let totalScore = 0;

    const calculatedResults = selectedQuestions.map((q) => {
      const userAnswer = answers[q.id] || null;
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) totalScore += 1;

      return {
        question: q.question,
        userAnswer,
        correctAnswer: q.answer,
      };
    });

    setScore(totalScore);
    setResults(calculatedResults);
    setIsSubmitted(true);

    const percentage = (totalScore / totalQuestions) * 100;
    const status = percentage >= 70 ? "Passed" : "Failed";

    try {
      const response = await fetch("/api/exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          examId: Number(examId),
          examTitle,
          score: Number(totalScore),
          total: totalQuestions,
          status,
        }),
      });

      if (response.ok) {
        alert(`Exam submitted successfully! You ${status}.`);
      } else {
        const errorData = await response.json();
        console.error("Failed to submit exam:", errorData);
        alert("Failed to submit exam");
      }
    } catch (error) {
      console.error("Error submitting exam:", error);
      alert("An error occurred while submitting the exam");
    }
  }, [answers, selectedQuestions, examId, userId]);

  // Start Exam
  const startExam = useCallback(() => {
    setHasStarted(true);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      {!hasStarted && !isSubmitted ? (
        <div className="relative bg-opacity-50 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto mt-10 text-center bg-white">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
            {t('exam.exams.Guidelines')}
          </h1>
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1484/1484916.png"
              alt="Guidelines"
              className="w-28 h-28 animate-pulse"
            />
          </div>
          <p className="text-red-600 text-lg font-semibold mb-4">
             {t('exam.exams.PleaseRead')}
          </p>
          <ul className="text-left text-gray-700 list-none space-y-4 mb-8 mx-8">
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-blue-600 font-bold text-lg mr-3">
              {t('exam.exams.Schedule')}:
              </span>
              <span>
              {t('exam.exams.Mint')}
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-green-600 text-lg font-bold mr-3">
              {t('exam.exams.FactCheck')}:
              </span>
              <span>
              {t('exam.exams.options')}
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-red-600 text-lg font-bold mr-3">
              {t('exam.exams.Cancel')}:
              </span>
              <span>
              {t('exam.exams.answers')}
              </span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-yellow-600 text-lg font-bold mr-3">
              {t('exam.exams.Insights')}:
              </span>
              <span>
              {t('exam.exams.submission')}
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
      ) : hasStarted && !isSubmitted ? (
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">MCQ Exam</h1>
            <div className="text-red-600 font-bold">
              Time Left: {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
            </div>
          </div>
          {selectedQuestions.map((q) => (
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
            className="bg-green-500 text-white p-3 rounded mt-4"
          >
            Submit Exam
          </button>
        </div>
      ) : (
        <div className="py-12 px-6 max-w-6xl mx-auto mt-10">
          <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">
              Your Exam Results
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Congratulations on completing the exam!
            </p>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl font-extrabold text-gray-800">
                Score:
                <span className="text-5xl font-black text-indigo-600 animate-bounce ml-2">
                  {score}
                </span>{" "}
                / {selectedQuestions.length}
              </h2>
              <div className="absolute -top-3 -right-10 w-16 h-16 rounded-full bg-indigo-300 opacity-20 blur-xl animate-pulse"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 ${
                    result.userAnswer === result.correctAnswer
                      ? "bg-green-50 border-l-4 border-green-500"
                      : "bg-red-50 border-l-4 border-red-500"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Question {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-3">{result.question}</p>
                  <p className="text-sm text-gray-600">
                    Your Answer:{" "}
                    <span
                      className={`font-semibold ${
                        result.userAnswer === result.correctAnswer
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {result.userAnswer || "Not Answered"}
                    </span>
                  </p>
                  {result.userAnswer !== result.correctAnswer && (
                    <p className="text-sm text-gray-600">
                      Correct Answer:{" "}
                      <span className="font-semibold text-indigo-600">
                        {result.correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Restart Button */}
            <button
              onClick={() => router.push("/en/exam")}
              className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition hover:scale-105"
            >
              Retake Exam
            </button>

            {/* Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamWithId;
