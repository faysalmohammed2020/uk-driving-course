// ResultCard.tsx
import React from "react";

type ResultCardProps = {
  question: string;
  userAnswer: string | null;
  correctAnswer: string;
};

const ResultCard: React.FC<ResultCardProps> = ({
  question,
  userAnswer,
  correctAnswer,
}) => {
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div
      className={`p-6 rounded-lg shadow-md mb-4 ${
        isCorrect ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <h2 className="text-lg font-bold mb-2 text-gray-800">{question}</h2>
      <p className="text-gray-700">
        Your Answer:{" "}
        <span
          className={`font-semibold ${
            isCorrect ? "text-green-600" : "text-red-600"
          }`}
        >
          {userAnswer || "Not Answered"}
        </span>
      </p>
      {!isCorrect && (
        <p className="text-gray-700">
          Correct Answer:{" "}
          <span className="font-semibold text-blue-600">{correctAnswer}</span>
        </p>
      )}
    </div>
  );
};

export default ResultCard;
