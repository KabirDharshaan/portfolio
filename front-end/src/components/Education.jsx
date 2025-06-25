


import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import collegeImg from "../assets/10954213_646815555444140_1109846545044414416_o.jpg"; // Replace with your actual image path

const Education = () => {
  return (
    <section id="education" className="w-full flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
      <div className="w-24 h-1 bg-blue-600 mb-8 rounded-full"></div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-lg p-6">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold">Kalasilangam (Kalvium)</h3>
          <p className="text-lg mt-2">UG Program in Software Product Engineering</p>
          <div className="flex justify-center md:justify-start items-center mt-4 text-white">
            <FaCalendarAlt className="mr-2" />
            <span className="text-md">2024 – 2028</span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={collegeImg}
            alt="Kalvium College"
            className="w-64 h-40 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
