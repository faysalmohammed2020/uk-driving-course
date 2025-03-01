// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaStethoscope, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";

// const PCOMedical: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     preferredDate: "",
//     preferredTime: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="flex w-full min-h-screen items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white px-10 py-20 rounded-2xl shadow-lg max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Column - Medical Check Information */}
//         <div className="p-6 text-left">
//           <div className="flex justify-center mb-4">
//             <FaStethoscope className="text-teal-700 text-4xl" />
//           </div>
//           <h2 className="text-3xl font-bold text-teal-700 mb-4">Medical Check</h2>
//           <p className="text-gray-700 mb-4">
//             You will undergo a TPH204 TFL medical test to ensure you're fit to drive.
//             Our in-house GP will check your medical history and complete your medical.
//           </p>
//           <h3 className="text-xl font-semibold text-teal-700 mb-2">Why is this important?</h3>
//           <p className="text-gray-600 mb-4">
//             The medical test ensures you meet the required health standards to drive safely.
//             Your eyesight, general health, and medical history will be assessed.
//           </p>
//         </div>

//         {/* Right Column - Medical Booking Form */}
//         <div className="p-6 border-l border-gray-200">
//           <h3 className="text-xl font-semibold text-teal-700 mb-2">Book Your Medical Appointment</h3>
//           {!isSubmitted ? (
//             <form onSubmit={handleSubmit} className="text-left">
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold">Preferred Date</label>
//                 <input
//                   type="date"
//                   name="preferredDate"
//                   value={formData.preferredDate}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold">Preferred Time</label>
//                 <input
//                   type="time"
//                   name="preferredTime"
//                   value={formData.preferredTime}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 w-full bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
//               >
//                 Confirm Appointment
//               </button>
//             </form>
//           ) : (
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-teal-700 mb-2">Appointment Confirmed!</h3>
//               <p className="text-gray-600">Your medical check appointment is scheduled for {formData.preferredDate} at {formData.preferredTime}.</p>
//               <button
//                 onClick={() => router.push("/dashboard")}
//                 className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
//               >
//                 Go to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PCOMedical;
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStethoscope, FaClipboardCheck, FaUserMd, FaVial, FaFileMedical, FaCheckCircle } from "react-icons/fa";

const PCOMedical: React.FC = () => {
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
        {/* Left Column - Medical Information & Steps */}
        <div className="p-6 text-left">
          <div className="flex justify-center mb-4">
            <FaStethoscope className="text-teal-700 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Medical Check</h2>
          <p className="text-gray-700 mb-4">
            You will undergo a TPH204 TFL medical test to ensure you're fit to drive.
            Our in-house GP will check your medical history and complete your medical.
          </p>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Step-by-Step Medical Checkup Process</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaClipboardCheck className="mr-2 text-teal-700" /> Step 1: Booking Your Medical Test
            </h4>
            <p className="text-gray-600">You need to schedule an appointment with an approved medical examiner.</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaUserMd className="mr-2 text-teal-700" /> Step 2: Consultation with a Doctor
            </h4>
            <p className="text-gray-600">A registered GP will review your medical history and discuss any existing conditions.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaVial className="mr-2 text-teal-700" /> Step 3: Physical Examination
            </h4>
            <p className="text-gray-600">The doctor will conduct various tests, including eyesight, blood pressure, and general fitness assessments.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaFileMedical className="mr-2 text-teal-700" /> Step 4: Completing Medical Forms
            </h4>
            <p className="text-gray-600">Your GP will fill out the required TPH204 medical form and sign it for submission.</p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="mr-2 text-teal-700" /> Step 5: Submitting Your Medical Report
            </h4>
            <p className="text-gray-600">Submit your completed medical form to Transport for London (TfL) for verification.</p>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div className="p-6 border-l border-gray-200">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Book Your Medical Appointment</h3>
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
                Confirm Appointment
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Appointment Confirmed!</h3>
              <p className="text-gray-600">Your medical check appointment is scheduled for {formData.preferredDate} at {formData.preferredTime}.</p>
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

export default PCOMedical;