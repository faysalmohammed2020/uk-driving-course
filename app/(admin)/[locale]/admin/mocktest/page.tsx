"use client"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"
import { FaCheckCircle, FaFileAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
// import { useState } from "react"
// import fs from "fs/promises";
// import path from "path";

// Import all question sets
import questions1 from "@/app/(main)/[locale]/data/questions.json"
import questions2 from "@/app/(main)/[locale]/data/questions2.json"
import questions3 from "@/app/(main)/[locale]/data/questions3.json"
import questions4 from "@/app/(main)/[locale]/data/questions4.json"
import questions5 from "@/app/(main)/[locale]/data/questions5.json"
import questions6 from "@/app/(main)/[locale]/data/questions6.json"
import questions7 from "@/app/(main)/[locale]/data/questions7.json"
import questions8 from "@/app/(main)/[locale]/data/questions8.json"
import questions9 from "@/app/(main)/[locale]/data/questions9.json"
import questions10 from "@/app/(main)/[locale]/data/questions10.json"
import questions11 from "@/app/(main)/[locale]/data/questions11.json"
import questions12 from "@/app/(main)/[locale]/data/questions12.json"
import questions13 from "@/app/(main)/[locale]/data/questions13.json"
import questions14 from "@/app/(main)/[locale]/data/questions14.json"
import questions15 from "@/app/(main)/[locale]/data/questions15.json"
import questions16 from "@/app/(main)/[locale]/data/questions16.json"
import questions17 from "@/app/(main)/[locale]/data/questions17.json"
import questions18 from "@/app/(main)/[locale]/data/questions18.json"
import questions19 from "@/app/(main)/[locale]/data/questions19.json"
import questions20 from "@/app/(main)/[locale]/data/questions20.json"
import questions21 from "@/app/(main)/[locale]/data/questions21.json"
import questions22 from "@/app/(main)/[locale]/data/questions22.json"
import questions23 from "@/app/(main)/[locale]/data/questions23.json"
import questions24 from "@/app/(main)/[locale]/data/questions24.json"
import questions25 from "@/app/(main)/[locale]/data/questions25.json"
import questions26 from "@/app/(main)/[locale]/data/questions26.json"
import questions27 from "@/app/(main)/[locale]/data/questions27.json"
import questions28 from "@/app/(main)/[locale]/data/questions28.json"
import questions29 from "@/app/(main)/[locale]/data/questions29.json"
import questions30 from "@/app/(main)/[locale]/data/questions30.json"
import { useSession } from "@/lib/auth-client"
// import { setErrorMap } from "better-auth";
import { useLocale } from "next-intl"

interface MockTest {
  id: number
  title: string
  questions: {
    id: number
    question: string
    options: string[]
    answer: string
  }[]
}

const ITEMS_PER_PAGE = 8

const ExamPage = () => {
  const router = useRouter()
  const [mockTests, setMockTests] = useState<MockTest[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [editingExamId, setEditingExamId] = useState<number | null>(null)
  const [editedExam, setEditedExam] = useState<MockTest | null>(null)

  const [examResults, setExamResults] = useState<any[]>([])
  const { data: session } = useSession()
  const userId = session?.user.id
  const locale = useLocale()

  console.log("PassedExams::", examResults)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/exam?userId=${userId}`)
        if (!response.ok) throw new Error("Failed to fetch results")

        const data = await response.json()
        setExamResults(data)
      } catch (err: any) {
        // setErrorMap(err.message);
        console.log(err)
      }
    }

    if (userId) {
      fetchResults()
    }
  }, [userId])

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
    ])
  }, [])

  const startExam = (id: number) => {
    router.push(`/${locale}/exam/${id}`)
  }

  const totalPages = Math.ceil(mockTests.length / ITEMS_PER_PAGE)
  const currentTests = mockTests.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  // Check if the user has passed the exam with the given examId
  const hasPassed = (examId: number) => {
    return examResults.some((result) => result.examId === examId && result.status === "Passed")
  }

  const startEditing = (test: MockTest) => {
    setEditingExamId(test.id)
    setEditedExam({ ...test })
  }

  const cancelEditing = () => {
    setEditingExamId(null)
    setEditedExam(null)
  }

  const handleExamChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editedExam) {
      try {
        const updatedExam = JSON.parse(e.target.value)
        setEditedExam(updatedExam)
      } catch (error) {
        // Don't update state if JSON is invalid, but allow editing to continue
        console.error("Invalid JSON format", error)
      }
    }
  }

  const saveExamChanges = async (examId: number) => {
    if (!editedExam) return

    try {
      // Determine which question file to update based on examId
      const fileNumber = Math.ceil(examId / 100)
      const fileName = fileNumber === 1 ? "questions.json" : `questions${fileNumber}.json`

      // Send the updated exam to the server
      const response = await fetch(`/api/update-exam`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          examId: examId,
          updatedExam: editedExam,
          fileName: fileName,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update exam")
      }

      // Update the local state with the edited exam
      setMockTests(mockTests.map((test) => (test.id === examId ? editedExam : test)))

      // Exit edit mode
      setEditingExamId(null)
      setEditedExam(null)
    } catch (error) {
      console.error("Error saving exam changes:", error)
    }
  }

  return (
    <section className="bg-white text-white py-16 text-center px-4">
      <h2 className="text-4xl font-extrabold text-black">Topographical Theory Test</h2>
      <p className="mt-3 text-lg max-w-3xl mx-auto text-black">
        We strongly advise you to read the handbook before starting our practice tests.
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
            <p className="text-sm text-gray-600 text-left">{test.questions.length} Questions</p>
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
              onClick={() => startEditing(test)}
              className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out w-full shadow-md hover:shadow-xl"
            >
              <FaEdit className="inline mr-2" /> Edit Exam
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
            currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          <IoIosArrowBack size={24} className="text-white" />
        </button>
        <span className="font-semibold text-lg bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12 ${
            currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          <IoIosArrowForward size={24} className="text-white" />
        </button>
      </div>

      {/* Edit Exam Modal */}
      {editingExamId !== null && editedExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">Edit Exam: {editedExam.title}</h3>
              <button onClick={cancelEditing} className="text-white hover:text-red-200">
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-4 flex-grow overflow-auto">
              <p className="text-gray-700 mb-2">Edit the exam JSON below (title, questions, options, etc.):</p>
              <textarea
                className="w-full text-slate-800 h-[60vh] p-4 border border-gray-300 rounded font-mono text-sm"
                value={JSON.stringify(editedExam, null, 2)}
                onChange={handleExamChange}
              />
            </div>

            <div className="p-4 bg-gray-100 flex justify-end gap-3">
              <button onClick={cancelEditing} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                Cancel
              </button>
              <button
                onClick={() => saveExamChanges(editingExamId)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
              >
                <FaSave /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ExamPage

