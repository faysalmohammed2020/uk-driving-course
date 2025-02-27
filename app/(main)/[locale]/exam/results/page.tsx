// "use client"
// import { useEffect, useState } from 'react';
// import questions from '../../data/questions.json';

// export default function Result() {
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     const storedAnswers = JSON.parse(localStorage.getItem('answers') || '{}');
//     let tempScore = 0;

//     questions.forEach((q) => {
//       if (storedAnswers[q.id] === q.answer) {
//         tempScore++;
//       }
//     });

//     setScore(tempScore);
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-md text-center">
//         <h1 className="text-3xl font-bold mb-6">Exam Result</h1>
//         <p className="text-xl">You scored {score} out of {questions.length}</p>
//       </div>
//     </div>
//   );
// }










"use client"
import { useEffect, useState } from 'react';
import questions from '../../data/questions.json';

export default function Result() {
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem('answers') || '{}');
    let tempScore = 0;

    questions.forEach((q) => {
      if (storedAnswers[q.id] === q.answer) {
        tempScore++;
      }
    });

    setScore(tempScore);

    // Show confetti if the score is above a certain threshold
    if (tempScore > questions.length * 0.7) {
      setShowConfetti(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center relative">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Exam Results
        </h1>
        <p className="text-lg mb-4">Congratulations! You've completed the exam.</p>
        <div className="text-6xl font-bold mb-6 text-green-600 animate-bounce">
          {score} / {questions.length}
        </div>
        <p className="text-gray-600">
          You scored <span className="font-semibold">{((score / questions.length) * 100).toFixed(2)}%</span>
        </p>
        <button
          onClick={() => window.location.href = '/exam'}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Retake Exam
        </button>

        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            <Confetti />
          </div>
        )}
      </div>
    </div>
  );
}

// Confetti Animation Component
const Confetti = () => (
  <div className="confetti-container">
    <div className="confetti confetti-1"></div>
    <div className="confetti confetti-2"></div>
    <div className="confetti confetti-3"></div>
    <div className="confetti confetti-4"></div>
    <div className="confetti confetti-5"></div>
  </div>
);
