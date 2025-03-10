"use client";
import { useRouter } from "@/i18n/navigation";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const UserExamResults = () => {
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

  const handleRetake = (examId: string) => {
    // Redirect to retake page or handle retake logic here
    router.push(`/exam/${examId}`); // Example retake URL (adjust according to your routes)
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (examResults.length === 0) return <p>No exam results found.</p>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-sky-800">
        Your Exam Results
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white border border-gray-200">
        <table className="min-w-full table-auto text-gray-700">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 text-lg font-semibold">
            <tr>
              <th className="py-3 px-6 text-left">Exam Title</th>
              <th className="py-3 px-6 text-left">Score</th>
              <th className="py-3 px-6 text-left">Total</th>
              <th className="py-3 px-6 text-left">Percentage</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Retake Exam</th>
            </tr>
          </thead>
          <tbody>
            {examResults.map((result) => (
              <tr
                key={result.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="py-4 px-6 border-b">{result.examTitle}</td>
                <td className="py-4 px-6 border-b">{result.score}</td>
                <td className="py-4 px-6 border-b">{result.total}</td>
                <td className="py-4 px-6 border-b">
                  {Math.round((result.score / result.total) * 100)}%
                </td>
                <td className="py-4 px-6 border-b font-semibold">
                  <span
                    className={`inline-block py-1 px-3 rounded-full ${
                      result.status === "Passed"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {result.status}
                  </span>
                </td>
                <td className="py-4 px-6 border-b">
                  {new Date(result.createdAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 border-b">
                  {result.status === "Failed" && (
                    <button
                      onClick={() => handleRetake(result.examId)}
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Retake Exam
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserExamResults;
