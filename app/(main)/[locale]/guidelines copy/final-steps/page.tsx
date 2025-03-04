"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaClipboardCheck, FaFileSignature, FaUserCheck, FaCheckCircle } from "react-icons/fa";

const FinalStepSERU: React.FC = () => {
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
        {/* Left Column - Final Steps Information */}
        <div className="p-6 text-left">
          <div className="flex justify-center mb-4">
            <FaClipboardCheck className="text-teal-700 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Final Steps</h2>
          <p className="text-gray-700 mb-4">
            We will complete all necessary application forms and file your application directly to TFL.
            We ensure everything is done properly, making the process hassle-free and simple.
          </p>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Step-by-Step Final Process</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaFileSignature className="mr-2 text-teal-700" /> Step 1: Completing Application Forms
            </h4>
            <p className="text-gray-600">Ensure all necessary application forms are accurately filled and signed.</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaUserCheck className="mr-2 text-teal-700" /> Step 2: Identity Verification & Background Check
            </h4>
            <p className="text-gray-600">Your identity and background checks will be reviewed before submission.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="mr-2 text-teal-700" /> Step 3: Submitting the Application to TfL
            </h4>
            <p className="text-gray-600">We will submit your completed application to Transport for London (TfL) for approval.</p>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div className="p-6 border-l border-gray-200">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Complete Your Application</h3>
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
                Confirm Final Submission
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">Your application process is now complete, and it's being reviewed by TfL.</p>
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

export default FinalStepSERU;
