import { getTranslations } from "next-intl/server";
import React from "react";
import {
  FaCalendarCheck,
  FaStethoscope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const icons: JSX.Element[] = [
 <FaCalendarCheck className="text-white text-3xl" />,
 <FaStethoscope className="text-white text-3xl" />,
 <FaMapMarkerAlt className="text-white text-3xl" />,
 <FaClipboardCheck className="text-white text-3xl" />,
 <FaFileAlt className="text-white text-3xl" />
];

const GuidelinesCard: React.FC = async() => {
  const t =await getTranslations();
  const guide = t.raw("guides.Guidline.GuidlinesDetails");
  return (
    <div className="flex justify-center items-center h-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
        {guide.map((guidlinesDetails, index) => (
          <a
            key={index}
             href={guidlinesDetails.link}
            className="bg-teal-700 text-white py-20 px-6 rounded-lg shadow-lg hover:bg-teal-800 transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="mb-4">{icons[index]}</div>
            <h3 className="text-2xl font-semibold mb-2">{guidlinesDetails.title}</h3>
            <p className="text-lg text-gray-200">{guidlinesDetails.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GuidelinesCard;
