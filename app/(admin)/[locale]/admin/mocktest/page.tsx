// "use client"
// import { useRouter } from "next/navigation"
// import type React from "react"
// import { useEffect, useState } from "react"
// import { FaCheckCircle, FaFileAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa"
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// // Import the single JSON file with all question sets
// import allQuestions from "@/app/(main)/[locale]/data/allquestions.json"
// import { useSession } from "@/lib/auth-client"
// import { useLocale } from "next-intl"

// interface Question {
//   id: number
//   question: string
//   options: string[]
//   answer: string | string[]
// }

// interface QuestionSet {
//   id: number
//   title: string
//   questions: Question[]
// }

// const ExamPage = () => {
//   const router = useRouter()
//   const [questionSets, setQuestionSets] = useState<QuestionSet[]>([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [editingSetId, setEditingSetId] = useState<number | null>(null)
//   const [editedSet, setEditedSet] = useState<QuestionSet | null>(null)
//   const [saveError, setSaveError] = useState<string | null>(null)
//   const [isSaving, setIsSaving] = useState(false)
//   const [saveMessage, setSaveMessage] = useState<string | null>(null)

//   const [examResults, setExamResults] = useState<any[]>([])
//   const { data: session } = useSession()
//   const userId = session?.user.id
//   const locale = useLocale()

//   const ITEMS_PER_PAGE = 8 // Since we only have 3 question sets, show all on one page

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await fetch(`/api/exam?userId=${userId}`)
//         if (!response.ok) throw new Error("Failed to fetch results")

//         const data = await response.json()
//         setExamResults(data)
//       } catch (err: any) {
//         console.log(err)
//       }
//     }

//     if (userId) {
//       fetchResults()
//     }
//   }, [userId])

//   useEffect(() => {
//     // Load the question sets from the imported JSON file
//     setQuestionSets(allQuestions)
//   }, [])

//   const totalPages = Math.ceil(questionSets.length / ITEMS_PER_PAGE)
//   const currentSets = questionSets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

//   // Check if the user has passed the exam with the given examId
//   const hasPassed = (examId: number) => {
//     return examResults.some((result) => result.examId === examId && result.status === "Passed")
//   }

//   const startEditing = (set: QuestionSet) => {
//     setEditingSetId(set.id)
//     setEditedSet({ ...set })
//     setSaveError(null)
//     setSaveMessage(null)
//   }

//   const cancelEditing = () => {
//     setEditingSetId(null)
//     setEditedSet(null)
//     setSaveError(null)
//     setSaveMessage(null)
//   }

//   const handleSetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     if (editedSet) {
//       try {
//         const updatedSet = JSON.parse(e.target.value)
//         setEditedSet(updatedSet)
//         setSaveError(null)
//       } catch (error) {
//         // Don't update state if JSON is invalid, but allow editing to continue
//         console.error("Invalid JSON format", error)
//       }
//     }
//   }

//   const saveSetChanges = async (setId: number) => {
//     if (!editedSet) return

//     setIsSaving(true)
//     setSaveError(null)
//     setSaveMessage(null)

//     try {
//       // Send the updated question set to the server
//       const response = await fetch(`/api/update-exam`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           setId: setId,
//           updatedSet: editedSet,
//         }),
//       })

//       const responseData = await response.json()

//       if (!response.ok) {
//         console.error("API error:", responseData)
//         throw new Error(responseData.error || "Failed to update question set")
//       }

//       console.log("Update response:", responseData)

//       // Update the local state with the edited question set
//       setQuestionSets((prevSets) => prevSets.map((set) => (set.id === setId ? editedSet : set)))

//       // Show success message
//       setSaveMessage(responseData.message || "Question set updated successfully")

//       // Exit edit mode after a short delay to show the success message
//       setTimeout(() => {
//         setEditingSetId(null)
//         setEditedSet(null)
//         setSaveMessage(null)
//       }, 1500)
//     } catch (error) {
//       console.error("Error saving question set changes:", error)
//       setSaveError((error as Error).message || "Failed to update question set")
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   return (
//     <section className="bg-white text-white py-16 text-center px-4">
//       <h2 className="text-4xl font-extrabold text-black">Topographical Theory Test</h2>
//       <p className="mt-3 text-lg max-w-3xl mx-auto text-black">
//         We strongly advise you to read the handbook before starting our practice tests.
//       </p>

//       {/* Question Sets Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//         {currentSets.map((set) => (
//           <div
//             key={set.id}
//             className="relative bg-white text-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start border border-gray-200 overflow-hidden"
//           >
//             <div className="flex items-center gap-3 mb-4 w-full">
//               <div className="bg-green-500 text-white p-3 rounded-lg shadow-md">
//                 <FaFileAlt className="text-2xl" />
//               </div>
//               <h3 className="font-semibold text-lg text-left w-full line-clamp-2 hover:whitespace-normal hover:absolute hover:bg-white hover:p-3 hover:rounded-lg hover:shadow-lg">
//                 {set.title}
//               </h3>
//             </div>
//             <p className="text-sm text-gray-600 text-left">{set.questions.length} Questions</p>
//             <h3 className="font-semibold text-lg text-left w-full line-clamp-2">
//               {/* Display checkmark if the exam has been passed */}
//               {hasPassed(set.id) && (
//                 <div className="flex gap-2">
//                   <span className="text-green-600 font-semibold">Passed:</span>
//                   <FaCheckCircle className="text-green-500 inline ml-2 size-6 mb-0" />
//                 </div>
//               )}
//             </h3>

//             <button
//               onClick={() => startEditing(set)}
//               className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out w-full shadow-md hover:shadow-xl"
//             >
//               <FaEdit className="inline mr-2" /> Edit Question Set
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls - only show if we have more than one page */}
//       {totalPages > 1 && (
//         <div className="mt-10 flex justify-center items-center gap-4">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className={`p-3 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12 ${
//               currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
//             }`}
//           >
//             <IoIosArrowBack size={24} className="text-white" />
//           </button>
//           <span className="font-semibold text-lg bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className={`p-3 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl flex items-center justify-center w-12 h-12 ${
//               currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
//             }`}
//           >
//             <IoIosArrowForward size={24} className="text-white" />
//           </button>
//         </div>
//       )}

//       {/* Edit Question Set Modal */}
//       {editingSetId !== null && editedSet && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
//             <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
//               <h3 className="text-xl font-bold">Edit Question Set: {editedSet.title}</h3>
//               <button onClick={cancelEditing} className="text-white hover:text-red-200">
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             <div className="p-4 flex-grow overflow-auto">
//               <p className="text-gray-700 mb-2">Edit the question set JSON below (title, questions, options, etc.):</p>
//               <textarea
//                 className="w-full text-slate-900 h-[60vh] p-4 border border-gray-300 rounded font-mono text-sm"
//                 value={JSON.stringify(editedSet, null, 2)}
//                 onChange={handleSetChange}
//               />

//               {saveError && (
//                 <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded">Error: {saveError}</div>
//               )}

//               {saveMessage && (
//                 <div className="mt-2 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
//                   {saveMessage}
//                 </div>
//               )}
//             </div>

//             <div className="p-4 bg-gray-100 flex justify-end gap-3">
//               <button
//                 onClick={cancelEditing}
//                 className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//                 disabled={isSaving}
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => saveSetChanges(editingSetId)}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
//                 disabled={isSaving}
//               >
//                 {isSaving ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Saving...
//                   </>
//                 ) : (
//                   <>
//                     <FaSave /> Save Changes
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

// export default ExamPage








"use client"
import { useRouter } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"
import { FaCheckCircle, FaFileAlt, FaEdit, FaSave, FaTimes } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// Import the single JSON file with all question sets
import allQuestions from "@/app/(main)/[locale]/data/allquestions.json"
import { useSession } from "@/lib/auth-client"
import { useLocale } from "next-intl"

interface Question {
  id: number
  question: string
  options: string[]
  answer: string | string[]
}

interface QuestionSet {
  id: number
  title: string
  questions: Question[]
}

const ExamPage = () => {
  const router = useRouter()
  const [questionSets, setQuestionSets] = useState<QuestionSet[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [editingSetId, setEditingSetId] = useState<number | null>(null)
  const [editedSet, setEditedSet] = useState<QuestionSet | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)

  const [examResults, setExamResults] = useState<any[]>([])
  const { data: session } = useSession()
  const userId = session?.user.id
  const locale = useLocale()

  const ITEMS_PER_PAGE = 8 // Since we only have 3 question sets, show all on one page

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/exam?userId=${userId}`)
        if (!response.ok) throw new Error("Failed to fetch results")

        const data = await response.json()
        setExamResults(data)
      } catch (err: any) {
        console.log(err)
      }
    }

    if (userId) {
      fetchResults()
    }
  }, [userId])

  useEffect(() => {
    // Load the question sets from the imported JSON file
    setQuestionSets(allQuestions)
  }, [])

  const totalPages = Math.ceil(questionSets.length / ITEMS_PER_PAGE)
  const currentSets = questionSets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  // Check if the user has passed the exam with the given examId
  const hasPassed = (examId: number) => {
    return examResults.some((result) => result.examId === examId && result.status === "Passed")
  }

  const startEditing = (set: QuestionSet) => {
    setEditingSetId(set.id)
    setEditedSet({ ...set })
    setSaveError(null)
    setSaveMessage(null)
  }

  const cancelEditing = () => {
    setEditingSetId(null)
    setEditedSet(null)
    setSaveError(null)
    setSaveMessage(null)
  }

  const handleSetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editedSet) {
      try {
        const updatedSet = JSON.parse(e.target.value)
        setEditedSet(updatedSet)
        setSaveError(null)
      } catch (error) {
        // Don't update state if JSON is invalid, but allow editing to continue
        console.error("Invalid JSON format", error)
      }
    }
  }

  const saveSetChanges = async (setId: number) => {
    if (!editedSet) return

    setIsSaving(true)
    setSaveError(null)
    setSaveMessage(null)

    try {
      // Send the updated question set to the server
      const response = await fetch(`/api/update-exam`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          setId: setId,
          updatedSet: editedSet,
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error("API error:", responseData)
        throw new Error(responseData.error || "Failed to update question set")
      }

      console.log("Update response:", responseData)

      // Update the local state with the edited question set
      setQuestionSets((prevSets) => prevSets.map((set) => (set.id === setId ? editedSet : set)))

      // Show success message
      setSaveMessage(responseData.message || "Question set updated successfully")

      // Exit edit mode after a short delay to show the success message
      setTimeout(() => {
        setEditingSetId(null)
        setEditedSet(null)
        setSaveMessage(null)
      }, 1500)
    } catch (error) {
      console.error("Error saving question set changes:", error)
      setSaveError((error as Error).message || "Failed to update question set")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="bg-white text-white py-16 text-center px-4">
      <h2 className="text-4xl font-extrabold text-black">Topographical Theory Test</h2>
      <p className="mt-3 text-lg max-w-3xl mx-auto text-black">
        We strongly advise you to read the handbook before starting our practice tests.
      </p>

      {/* Question Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {currentSets.map((set) => (
          <div
            key={set.id}
            className="relative bg-white text-gray-900 p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start border border-gray-200 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4 w-full">
              <div className="bg-green-500 text-white p-3 rounded-lg shadow-md">
                <FaFileAlt className="text-2xl" />
              </div>
              <h3 className="font-semibold text-lg text-left w-full line-clamp-2 hover:whitespace-normal hover:absolute hover:bg-white hover:p-3 hover:rounded-lg hover:shadow-lg">
                {set.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 text-left">{set.questions.length} Questions</p>
            <h3 className="font-semibold text-lg text-left w-full line-clamp-2">
              {/* Display checkmark if the exam has been passed */}
              {hasPassed(set.id) && (
                <div className="flex gap-2">
                  <span className="text-green-600 font-semibold">Passed:</span>
                  <FaCheckCircle className="text-green-500 inline ml-2 size-6 mb-0" />
                </div>
              )}
            </h3>

            <button
              onClick={() => startEditing(set)}
              className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 ease-in-out w-full shadow-md hover:shadow-xl"
            >
              <FaEdit className="inline mr-2" /> Edit Question Set
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls - only show if we have more than one page */}
      {totalPages > 1 && (
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
      )}

      {/* Edit Question Set Modal */}
      {editingSetId !== null && editedSet && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-10 py-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">Edit Question Set</h3>
              <button onClick={cancelEditing} className="text-white hover:text-red-200">
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-4 flex-grow overflow-auto">
              <form className="space-y-6">
                {/* Title Field */}
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Question Set Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={editedSet.title}
                    onChange={(e) => setEditedSet({ ...editedSet, title: e.target.value })}
                    className="w-full text-slate-900 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Questions Section */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-gray-800">Questions</h4>
                    <button
                      type="button"
                      onClick={() => {
                        const newQuestions = [...editedSet.questions]
                        const newId = Math.max(...newQuestions.map((q) => q.id), 0) + 1
                        newQuestions.push({
                          id: newId,
                          question: "New question",
                          options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                          answer: "Option 1",
                        })
                        setEditedSet({ ...editedSet, questions: newQuestions })
                      }}
                      className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-1"
                    >
                      <span>+ Add Question</span>
                    </button>
                  </div>

                  {editedSet.questions.map((question, qIndex) => (
                    <div key={question.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="font-medium text-gray-700">Question {qIndex + 1}</h5>
                        <button
                          type="button"
                          onClick={() => {
                            const newQuestions = editedSet.questions.filter((_, i) => i !== qIndex)
                            setEditedSet({ ...editedSet, questions: newQuestions })
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTimes />
                        </button>
                      </div>

                      {/* Question Text */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
                        <textarea
                          value={question.question}
                          onChange={(e) => {
                            const newQuestions = [...editedSet.questions]
                            newQuestions[qIndex].question = e.target.value
                            setEditedSet({ ...editedSet, questions: newQuestions })
                          }}
                          className="w-full text-slate-900 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          rows={2}
                        />
                      </div>

                      {/* Options */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <div key={oIndex} className="flex items-center gap-2">
                              <input
                                type="text"
                                value={option}
                                onChange={(e) => {
                                  const newQuestions = [...editedSet.questions]
                                  newQuestions[qIndex].options[oIndex] = e.target.value
                                  setEditedSet({ ...editedSet, questions: newQuestions })
                                }}
                                className="flex-grow text-slate-900 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const newQuestions = [...editedSet.questions]
                                  newQuestions[qIndex].options = newQuestions[qIndex].options.filter(
                                    (_, i) => i !== oIndex,
                                  )
                                  setEditedSet({ ...editedSet, questions: newQuestions })
                                }}
                                className="text-red-500 hover:text-red-700"
                              >
                                <FaTimes />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              const newQuestions = [...editedSet.questions]
                              newQuestions[qIndex].options.push(`Option ${newQuestions[qIndex].options.length + 1}`)
                              setEditedSet({ ...editedSet, questions: newQuestions })
                            }}
                            className="mt-1 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
                          >
                            + Add Option
                          </button>
                        </div>
                      </div>

                      {/* Answer */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correct Answer</label>
                        {Array.isArray(question.answer) ? (
                          // Multiple correct answers
                          <div className="space-y-2">
                            {question.options.map((option, oIndex) => (
                              <div key={oIndex} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`answer-${qIndex}-${oIndex}`}
                                  checked={question.answer.includes(option)}
                                  onChange={(e) => {
                                    const newQuestions = [...editedSet.questions]
                                    if (e.target.checked) {
                                      if (!Array.isArray(newQuestions[qIndex].answer)) {
                                        newQuestions[qIndex].answer = [option]
                                      } else {
                                        newQuestions[qIndex].answer = [...newQuestions[qIndex].answer, option]
                                      }
                                    } else {
                                      newQuestions[qIndex].answer = (newQuestions[qIndex].answer as string[]).filter(
                                        (a) => a !== option,
                                      )
                                    }
                                    setEditedSet({ ...editedSet, questions: newQuestions })
                                  }}
                                  className="mr-2"
                                />
                                <label htmlFor={`answer-${qIndex}-${oIndex}`} className="text-sm text-gray-700">
                                  {option}
                                </label>
                              </div>
                            ))}
                            <div className="mt-2 text-sm text-gray-500">(Multiple answers allowed)</div>
                          </div>
                        ) : (
                          // Single correct answer
                          <select
                            value={question.answer}
                            onChange={(e) => {
                              const newQuestions = [...editedSet.questions]
                              newQuestions[qIndex].answer = e.target.value
                              setEditedSet({ ...editedSet, questions: newQuestions })
                            }}
                            className="w-full text-slate-900 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          >
                            {question.options.map((option, oIndex) => (
                              <option key={oIndex} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        <div className="mt-2">
                          <button
                            type="button"
                            onClick={() => {
                              const newQuestions = [...editedSet.questions]
                              if (Array.isArray(newQuestions[qIndex].answer)) {
                                // Convert to single answer
                                newQuestions[qIndex].answer = newQuestions[qIndex].options[0] || ""
                              } else {
                                // Convert to multiple answers
                                newQuestions[qIndex].answer = [newQuestions[qIndex].answer]
                              }
                              setEditedSet({ ...editedSet, questions: newQuestions })
                            }}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            {Array.isArray(question.answer) ? "Switch to single answer" : "Switch to multiple answers"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </form>

              {saveError && (
                <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">Error: {saveError}</div>
              )}

              {saveMessage && (
                <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
                  {saveMessage}
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-100 flex justify-end gap-3">
              <button
                onClick={cancelEditing}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                onClick={() => saveSetChanges(editingSetId)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave /> Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ExamPage

