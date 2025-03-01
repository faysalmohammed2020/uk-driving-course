"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaClipboardList, FaMap, FaBook, FaCheckCircle } from "react-icons/fa";

const TopographicalTraining: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white px-10 py-20 rounded-2xl shadow-lg max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Training Information & Steps */}
        <div className="p-6 text-left">
          <div className="flex justify-center mb-4">
            <FaMapMarkerAlt className="text-teal-700 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Topographical Training</h2>
          <p className="text-gray-700 mb-4">
            You will undergo 3 hours of Topographical skills training. We will show you the format of the test
            and how to navigate and read the London A-Z map.
          </p>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Step-by-Step Topographical Training Process</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaClipboardList className="mr-2 text-teal-700" /> Step 1: Understanding the Test Format
            </h4>
            <p className="text-gray-600">We will explain the layout and structure of the topographical test.</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaMap className="mr-2 text-teal-700" /> Step 2: Learning Map Reading Skills
            </h4>
            <p className="text-gray-600">You'll be trained on how to navigate using the London A-Z map.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaBook className="mr-2 text-teal-700" /> Step 3: Route Planning Techniques
            </h4>
            <p className="text-gray-600">We will guide you on how to plot and identify the best travel routes.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="mr-2 text-teal-700" /> Step 4: Practice Test & Evaluation
            </h4>
            <p className="text-gray-600">A mock test will be conducted to evaluate your skills before the actual exam.</p>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div className="p-6 border-l border-gray-200">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Book Your Training Session</h3>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="text-left">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
              >
                Confirm Training Session
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Training Session Confirmed!</h3>
              <p className="text-gray-600">Your topographical training is scheduled for {formData.preferredDate} at {formData.preferredTime}.</p>
              <button
                onClick={() => router.push("/dashboard")}
                className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopographicalTraining;
