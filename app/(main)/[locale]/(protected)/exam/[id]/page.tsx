<<<<<<< HEAD
"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";

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

import QuestionCard from "@/app/components/QuestionCard";
import { useSession } from "@/lib/auth-client";
// import ResultCard from "@/app/components/ResultCard";

const ExamPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const examId = useMemo(() => parseInt(id as string), [id]);
  const { data: session } = useSession();
  const userId = session?.user.id;
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  const [examTitle, setExamTiele] = useState("");

  // Combine all question sets using useMemo for optimization
  const allQuestions = useMemo(
    () => [
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
    ],
    []
  );

  // Load questions for the specific exam
  useEffect(() => {
    const selectedTest = allQuestions.find((test) => test.id === examId);
    const title = selectedTest?.title;
    setExamTiele(title);
    if (selectedTest) {
      setSelectedQuestions(selectedTest.questions);
=======
"use client"
import { useEffect, useState, useMemo, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import QuestionCard from "@/app/components/QuestionCard"

const ExamPage = () => {
  const router = useRouter()
  const { id } = useParams()
  const examId = useMemo(() => Number.parseInt(id as string), [id])
  console.log("Exam ID:", examId)

  const t = useTranslations()

  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([])

  // Load questions based on exam ID
  useEffect(() => {
    let quizQuestions = []

    if (examId === 100) {
      quizQuestions = t.raw("quiz.questions") // Load Quiz 1
    } else if (examId === 200) {
      quizQuestions = t.raw("quiz2.questions") // Load Quiz 2
    } else if (examId === 300){
      quizQuestions = t.raw("quiz3.questions")
    } else if (examId === 400){
      quizQuestions = t.raw("quiz4.questions")
    } else if (examId === 500){
      quizQuestions = t.raw("quiz5.questions")
    } 

    if (quizQuestions) {
      setSelectedQuestions(quizQuestions)
>>>>>>> 6cc1ad9abb13d887f87c446892f0d8e8519fb3c7
    }
  }, [examId, t])

  // Timer Logic
  useEffect(() => {
    if (!hasStarted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit() // Auto-submit when time's up
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [hasStarted])

  // Handle Option Selection
  const handleSelect = useCallback((questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }))
  }, [])

<<<<<<< HEAD

  const handleSubmit = useCallback(async () => {
    const userConfirmation = confirm("Are you sure you want to submit the exam?");
    if (!userConfirmation) return;
  
    // Total questions in the exam
    const totalQuestions = selectedQuestions.length;
    let totalScore = 0;
  
    const calculatedResults = selectedQuestions.map((q) => {
      const userAnswer = answers[q.id] || null;
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) totalScore += 1;
  
=======
  // Handle Exam Submission
  const handleSubmit = useCallback(() => {
    const userConfirmation = confirm("Are you sure you want to submit the exam?")
    if (!userConfirmation) return

    // Calculate Score and Results
    let totalScore = 0
    const calculatedResults = selectedQuestions.map((q) => {
      const userAnswer = answers[q.id] || null
      const isCorrect = userAnswer === q.answer
      if (isCorrect) totalScore += 1

>>>>>>> 6cc1ad9abb13d887f87c446892f0d8e8519fb3c7
      return {
        question: q.question,
        userAnswer,
        correctAnswer: q.answer,
<<<<<<< HEAD
      };
    });
  
    setScore(totalScore);
    setResults(calculatedResults);
    setIsSubmitted(true);
  
    // ✅ Calculate percentage and determine pass/fail
    const percentage = (totalScore / totalQuestions) * 100;
    const status = percentage >= 70 ? "Passed" : "Failed";
  
    try {
      // Send data to the API
      const response = await fetch("/api/exam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId, // Replace with actual user ID
          examId: Number(examId), // Ensure examId is a number
          examTitle,
          score: Number(totalScore), // Ensure score is a number
          total: totalQuestions, // Send total questions
          status, // ✅ Include pass/fail status
        }),
      });
  
      console.log("Response::::", response);
  
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
  }, [answers, selectedQuestions, examId, userId]); // Added userId dependency if used
  
  
=======
      }
    })

    setScore(totalScore)
    setResults(calculatedResults)
    setIsSubmitted(true)

    localStorage.setItem("answers", JSON.stringify(answers))
  }, [answers, selectedQuestions])

  // Start Exam
>>>>>>> 6cc1ad9abb13d887f87c446892f0d8e8519fb3c7
  const startExam = useCallback(() => {
    setHasStarted(true)
  }, [])

  // Format Time for Display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      {!hasStarted && !isSubmitted ? (
        <div className="relative bg-opacity-50 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto mt-10 text-center bg-white">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800">{t("exam.exams.Guidelines")}</h1>
          <p className="text-red-600 text-lg font-semibold mb-4">{t("exam.exams.PleaseRead")}</p>
         
          <ul className="text-left text-gray-700 list-none space-y-4 mb-8 mx-8">
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-blue-600 font-bold text-lg mr-3">{t("exam.exams.Schedule")}</span>
              <span>{t("exam.exams.Mint")}</span>
            </li>
            
        
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" > 
              <span className="material-icons text-green-600 text-lg font-bold mr-3">
                {t("exam.exams.FactCheck")}</span>
            <span>{t("exam.exams.options")}</span></li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-red-600 text-lg font-bold mr-3">{t("exam.exams.Cancel")}</span>
              <span>{t("exam.exams.answers")}</span>
            </li>
            <li className="flex items-start bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-icons text-yellow-600 text-lg font-bold mr-3">{t("exam.exams.Insights")}</span>
              {t("exam.exams.submission")}
            </li>
          </ul>
          <button
            onClick={startExam}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          >
            Start Exam
          </button>
        </div>
      ) : hasStarted && !isSubmitted ? (
        <div>
          <h1>Title: {examTitle}</h1>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">MCQ Exam</h1>
            <div className="text-red-600 font-bold">Time Left: {formatTime(timeLeft)}</div>
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
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit Exam
          </button>
        </div>
      ) : (
        <div className="py-12 px-6 max-w-6xl mx-auto mt-10">
          <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-10 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Your Exam Results</h1>
            <p className="text-lg mb-8 text-gray-600">Congratulations on completing the exam!</p>
            <h2 className="text-4xl font-extrabold text-gray-800">
              Score:
              <span className="text-5xl font-black text-indigo-600 animate-bounce ml-2">{score}</span> /{" "}
              {selectedQuestions.length}
            </h2>
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Question {index + 1}</h3>
                  <p className="text-gray-700 mb-3">{result.question}</p>
                  <p className="text-sm text-gray-600">
                    Your Answer: <span className={result.userAnswer === result.correctAnswer ? "text-green-600" : "text-red-600"}>{result.userAnswer || "Not Answered"}</span>
                  </p>
                  {result.userAnswer !== result.correctAnswer && (
                    <p className="text-sm text-gray-600">
                      Correct Answer: <span className="font-semibold text-indigo-600">{result.correctAnswer}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExamPage
