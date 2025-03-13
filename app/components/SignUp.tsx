import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-[900px] bg-white rounded-2xl shadow-lg flex overflow-hidden">
        {/* Left Section - Signup Form */}
        <div className="w-1/2 p-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Untitled UI</h2>
            <a href="#" className="text-gray-500 text-sm hover:underline">
              Go back
            </a>
          </div>
          <h2 className="text-2xl font-bold mb-2">Create account</h2>
          <p className="text-gray-500 mb-6">
            Start your 30-day free trial. Cancel anytime.
          </p>

          {/* Social Signup Buttons */}
          <button className="w-full flex items-center justify-center p-3 mb-3 border rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-200">
            <FcGoogle className="mr-2 text-xl" /> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center p-3 mb-4 border rounded-lg shadow-sm  bg-blue-500 text-white hover:bg-blue-600">
            <FaTwitter className="mr-2 text-xl" /> Sign up with Twitter
          </button>

          <div className="text-center text-gray-500 mb-4">or</div>

          {/* Form Fields */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Password*</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800"
            >
              Create account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right Section - Testimonial and Image */}
        <div className="w-1/2 bg-gray-900 text-white flex items-center justify-center p-8 relative">
          <Image
            src="/images/car_image.webp"
            alt="User Testimonial"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />

          <div className="absolute bottom-8 left-8 bg-white text-gray-900 p-4 rounded-lg shadow-lg w-[80%]">
            <p className="text-sm italic">
              "With Untitled, your support process can be as enjoyable as your
              product. When it’s this easy, customers keep coming back."
            </p>
            <p className="mt-3 font-bold">Jewel Rana</p>
            <p className="text-xs text-gray-600">
              Web Designer, Capsule
              <br />
              Web Development Agency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
