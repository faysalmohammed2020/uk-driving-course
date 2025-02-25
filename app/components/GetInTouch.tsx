// components/GetInTouch.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted", formData);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Form */}
          <div>
            <h3 className="text-green-600 font-semibold text-lg uppercase">
              Get in Touch
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Send us a message to enquire or book an appointment !
            </h2>
            <p className="text-gray-600 mt-2 mb-6">
              If you have any queries about us or about our services, do not
              hesitate to ping us a question of any kind using the below form.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />

              <button
                type="submit"
                className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Column - Image */}
          <div className="w-full h-full">
            <Image
              src="/images/get_in_touch.jpeg"
              alt="Book Appointment"
              className="w-full h-full object-cover rounded-lg shadow-md"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
