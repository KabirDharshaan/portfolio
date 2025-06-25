

import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import myImage from "../assets/1732008535391.jpg"; // Your image path

const Details = () => {
  return (
    <section id="home" className="w-full flex flex-col items-center text-center px-4 py-10">
      {/* Profile Image */}
      <img
        src={myImage}
        alt="Kabir Dharshaan"
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
      />

      {/* Name */}
      <h1 className="text-4xl font-bold text-black mb-2">Kabir Dharshaan</h1>

      {/* Role/Title */}
      <h2 className="text-xl font-semibold mb-4">
        <span className="text-blue-600">Software Product</span>{" "}
        <span className="text-yellow-500">Engineer</span>{" "}
        <span className="text-gray-600">& Full Stack Developer</span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-md text-gray-700 mb-6">
        Passionate about creating innovative digital solutions that solve real-world problems. 
        Currently pursuing Computer Science at Kalvium with expertise in modern web technologies.
      </p>

      {/* Social Icons */}
      {/* Social Icons */}
<div className="flex space-x-6 mb-6 text-2xl">
  <a href="https://www.linkedin.com/in/kabir-dharshaan-u-5365a1339/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-[#0077B5] hover:scale-110 transition duration-300" />
  </a>
  <a href="https://github.com/Kabir-dharshaaan-tech" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-black hover:scale-110 transition duration-300" />
  </a>
  <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
    <SiLeetcode className="text-[#FFA116] hover:scale-110 transition duration-300" />
  </a>
  <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer">
    <FaGlobe className="text-[#34A853] hover:scale-110 transition duration-300" />
  </a>
</div>


      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Details;
