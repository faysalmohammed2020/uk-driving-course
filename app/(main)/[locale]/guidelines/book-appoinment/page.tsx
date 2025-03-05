// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { FaCalendarCheck } from "react-icons/fa";

// const BookAppointmentInfo: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
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
//         {/* Left Column - Form */}
//         <div className="p-6 border-r border-gray-200">
//           <h3 className="text-xl font-semibold text-teal-700 mb-2">Book Your Appointment</h3>
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
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-semibold">Preferred Time</label>
//                 <input
//                   type="time"
//                   name="time"
//                   value={formData.time}
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
//               <p className="text-gray-600">Your appointment is scheduled for {formData.date} at {formData.time}.</p>
//               <button
//                 onClick={() => router.push("/dashboard")}
//                 className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
//               >
//                 Go to Dashboard
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Right Column - Information */}
//         <div className="p-6 text-center">
//           <div className="flex justify-center mb-4">
//             <FaCalendarCheck className="text-teal-700 text-4xl" />
//           </div>
//           <h2 className="text-3xl font-bold text-teal-700 mb-4">Book Appointment</h2>
//           <p className="text-gray-700 mb-4">
//             You can begin your PCO licence process by booking an appointment on a Thursday evening.
//             This appointment is crucial to start your journey in the private hire industry.
//           </p>
//           <h3 className="text-xl font-semibold text-teal-700 mb-2">Why is this important?</h3>
//           <p className="text-gray-600 mb-4">
//             Booking an appointment ensures that you are registered and prepared for the next steps, including
//             medical tests, topographical skills assessment, and document verification.
//           </p>
//           <p className="mt-4 text-gray-500 text-sm">
//             Need help? <a href="/contact" className="text-teal-700 hover:underline">Contact us</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookAppointmentInfo;








"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCalendarCheck, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const BookAppointmentInfo: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
        {/* Left Column - Form */}
        <div className="p-6 border-r border-gray-200">
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Book Your Appointment</h3>
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
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
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
              <p className="text-gray-600">Your appointment is scheduled for {formData.date} at {formData.time}.</p>
              <button
                onClick={() => router.push("/dashboard")}
                className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Contact Information */}
        <div className="p-6 text-left">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Get in Touch</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Location
            </h3>
            <p className="text-gray-700">PCO Licence East London<br/> 123 High Road, ABCDE<br/> XYZ MNO</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" /> Contact Us
            </h3>
            <p className="text-gray-700">Phone: 0123-456-5566</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 flex items-center">
              <FaEnvelope className="mr-2" /> Email
            </h3>
            <p className="text-gray-700">infor@birdsofeden.me</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <FaClock className="mr-2" /> Our Hours
            </h3>
            <p className="text-gray-700">
              Mon-Fri: 09:00am - 04:00pm<br/>
              Thurs: 09:00am - 08:00pm<br/>
              Sat/Sun: Closed
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 text-2xl hover:text-teal-700"><FaLinkedin /></a>
              <a href="#" className="text-gray-800 text-2xl hover:text-teal-700"><FaFacebook /></a>
              <a href="#" className="text-gray-800 text-2xl hover:text-teal-700"><FaGoogle /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentInfo;
