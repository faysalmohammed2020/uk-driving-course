"use client";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const UserExamResults = () => {
  const [examResults, setExamResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const userId = session?.user.id;

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (examResults.length === 0) return <p>No exam results found.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Exam Results</h2>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Exam ID</th>
            <th className="border border-gray-400 p-2">Exam Title</th>
            <th className="border border-gray-400 p-2">Score</th>
            <th className="border border-gray-400 p-2">Total</th>
            <th className="border border-gray-400 p-2">Status</th>
            <th className="border border-gray-400 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {examResults.map((result) => (
            <tr key={result.id} className="text-center">
              <td className="border border-gray-400 p-2">{result.examId}</td>
              <td className="border border-gray-400 p-2">{result.examTitle}</td>
              <td className="border border-gray-400 p-2">{result.score}</td>
              <td className="border border-gray-400 p-2">{result.total}</td>
              <td
                className={`border border-gray-400 p-2 font-bold ${
                  result.status === "Passed" ? "text-green-600" : "text-red-600"
                }`}
              >
                {result.status}
              </td>
              <td className="border border-gray-400 p-2">
                {new Date(result.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserExamResults;
