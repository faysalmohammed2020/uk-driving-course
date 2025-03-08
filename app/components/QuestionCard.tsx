import React from 'react';

type QuestionCardProps = {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, selectedOption, onSelect }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      {options.map((option, index) => (
        <div key={index} className="mb-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={question}
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelect(option)}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
