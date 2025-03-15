"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Link, useRouter } from "@/i18n/navigation";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress"; // Ensure you have Progress component available
import { FaBook, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

const courses = [
  {
    title: "SERU Online License Course",
    description: "Complete TfL SERU training",
    progress: 80,
  },
  {
    title: "Web Development",
    description: "Master modern web dev",
    progress: 60,
  },
  {
    title: "AI & Machine Learning",
    description: "Dive into AI concepts",
    progress: 40,
  },
];

export default function StudentDashboard() {
  const [examResults, setExamResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const userId = session?.user.id;
  const router = useRouter(); // for redirecting to the retake page

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/exam?userId=${userId}`);
        if (!response.ok) throw new Error("Failed to fetch results");

        const data = await response.json();
        setExamResults(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchResults();
    }
  }, [userId]);

  const passedResults = examResults.filter(
    (result) => result.status === "Passed"
  );

  // Calculate average percentage
  const totalExams = 30; // Total exams count

  const averagePercentage = totalExams
    ? passedResults.reduce(
        (sum, result) => sum + (result.score / result.total) * 100,
        0
      ) / totalExams
    : 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center">
              <FaChartLine className="text-3xl text-blue-500 mr-4" />
              <div>
                <p className="text-gray-600">Running Course</p>
                <p className="text-xl font-bold">65/100</p>
                <Progress value={65} className="mt-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <FaBook className="text-3xl text-green-500 mr-4" />
              <div>
                <p className="text-gray-600">Completed</p>
                <p className="text-xl font-bold">75/75</p>
                <Progress value={100} className="mt-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <FaChalkboardTeacher className="text-3xl text-blue-500 mr-4" />
              <div>
                <p className="text-gray-600">Exam Progress</p>
                <p className="text-xl font-bold">
                  {Math.round(averagePercentage)}%
                </p>
                <Progress value={averagePercentage} className="mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Courses Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-3">My Courses</h3>
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-4 flex flex-col">
                  <p className="font-semibold text-lg">{course.title}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {course.description}
                  </p>
                  <Progress value={course.progress} className="mb-3" />
                  <Button>
                    {course.progress >= 100 ? "Completed" : "Continue"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Exam Results Section */}
        {passedResults.length > 0 ? (
          <>
            <h3 className="text-lg font-semibold mb-3">Passed Exams</h3>
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white border border-gray-300 p-6">
              <table className="min-w-full table-auto text-gray-700">
                <thead className="bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold">
                  <tr>
                    <th className="py-4 px-6 text-left">Exam Title</th>
                    <th className="py-4 px-6 text-left">Score</th>
                    <th className="py-4 px-6 text-left">Total</th>
                    <th className="py-4 px-6 text-left">Percentage</th>
                    <th className="py-4 px-6 text-left">Date</th>
                    <th className="py-4 px-6 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {passedResults.map((result) => (
                    <tr
                      key={result.id}
                      className="hover:bg-gradient-to-r from-green-50 to-green-100 transition duration-200"
                    >
                      <td className="py-4 px-6 border-b">{result.examTitle}</td>
                      <td className="py-4 px-6 border-b">{result.score}</td>
                      <td className="py-4 px-6 border-b">{result.total}</td>
                      <td className="py-4 px-6 border-b">
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600">
                              {Math.round((result.score / result.total) * 100)}%
                            </span>
                          </div>
                          <div className="flex mb-2">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-green-500 h-2.5 rounded-full"
                                style={{
                                  width: `${(result.score / result.total) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 border-b">
                        {new Date(result.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6 border-b text-center">
                        <span
                          className={`inline-block p-2 rounded-full ${
                            result.status === "Passed"
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {result.status === "Passed" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mt-10">
              No Pass Exam Results Found.
            </h2>{" "}
            <img src="/images/noResultFound.png" alt="No exam results found" />
            <Link href="/user/exams">
              <button className="bg-green-400 font-semibold mt-6 px-6 py-3 rounded-md hover:bg-green-500 hover:text-white">
                Take a Test
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
