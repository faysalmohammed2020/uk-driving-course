import React from "react";
import {
  FaCalendarCheck,
  FaStethoscope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const cards = [
  {
    title: "Book Appointment",
    description:
      "You can begin your PCO licence by booking an appointment on a Thursday evening.",
    icon: <FaCalendarCheck className="text-white text-3xl" />,
    link: "/en/guidelines/book-appoinment",
  },
  {
    title: "Medical Check",
    description:
      "You will undergo a TPH204 TFL medical test to ensure you're fit to drive. Our in-house GP will check your medical history and complete your medical.",
    icon: <FaStethoscope className="text-white text-3xl" />,
    link: "/en/guidelines/medical-check",
  },
  {
    title: "Topographical Training",
    description:
      "You will undergo 3 hours of Topographical skills training. We will show you the format of the test and how to navigate and read the London A-Z map.",
    icon: <FaMapMarkerAlt className="text-white text-3xl" />,
    link: "/en/guidelines/topographical-training",
  },
  {
    title: "Final Steps",
    description:
      "We will complete all necessary application forms and file your application directly to TFL. We will complete everything, making the process hassle-free and simple.",
    icon: <FaClipboardCheck className="text-white text-3xl" />,
    link: "/en/guidelines/final-steps",
  },
  {
    title: "PCO Renewals",
    description:
      "Easily renew your PCO licence and keep driving without any hassle.",
    icon: <FaFileAlt className="text-white text-3xl" />,
    link: "/en/guidelines/pco-renewals",
  },
];

const GuidelinesCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="bg-teal-700 text-white py-20 px-6 rounded-lg shadow-lg hover:bg-teal-800 transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-lg text-gray-200">{card.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GuidelinesCard;
