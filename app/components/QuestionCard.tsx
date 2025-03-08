"use client"
import { useState } from "react"
import type React from "react"

interface QuestionCardProps {
  question: string
  options: string[]
  selectedOption: string | null
  onSelect: (option: string) => void
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, selectedOption, onSelect }) => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <p className="text-lg font-medium mb-2">{question}</p>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            className={`py-2 px-4 rounded cursor-pointer hover:bg-gray-100 ${
              selectedOption === option ? "bg-blue-500 text-white" : ""
            } ${hoveredOption === option ? "bg-gray-200" : ""}`}
            onClick={() => onSelect(option)}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionCard

