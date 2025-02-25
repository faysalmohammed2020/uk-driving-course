// components/SomethingAboutUs.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";

const SomethingAboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <div className="w-full h-full">
            <Image
              src="/images/car_image.webp"
              alt="London Bus"
              className="w-full h-full object-cover rounded-lg shadow-md"
              width={800}
              height={600}
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Completing your PCO licence will be hassle free.
            </h2>
            <p className="text-gray-600 mb-6">
              For only £545 with all fees included, we are the cheapest and one of London's
              only all in one PCO Licence centres where you can complete your
              topographical training, TPH 204 medical check and have your TFL PCO
              application correctly filled in and filed by us. We completely take the
              headache and stress out of the PCO application process.
            </p>

            <div className="flex items-center mb-6">
              <FaAward className="text-teal-600 text-3xl mr-4" />
              <div>
                <h4 className="text-2xl font-bold text-gray-800">8 Yrs+</h4>
                <p className="text-gray-600">Professional Experience!</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-md shadow hover:bg-yellow-700 transition duration-300">
                Book Now
              </button>
              <button className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomethingAboutUs;
