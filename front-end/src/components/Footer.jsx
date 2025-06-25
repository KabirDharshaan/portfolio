import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <div className="h-1 w-24 bg-blue-500 mx-auto my-3 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can collaborate.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get In Touch</h3>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <p className="font-medium">Email</p>
              <p>dharshaankabir@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-medium">Phone</p>
              <p>+91 93423 24874</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-medium">Location</p>
              <p>Trichy, Tamil Nadu, India</p>
            </div>
          </div>

          <div>
            <p className="font-medium mt-6 mb-2">Connect With Me</p>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-md">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-gray-800 text-white p-3 rounded-md">
                <FaGithub />
              </a>
              <a href="#" className="bg-orange-500 text-white p-3 rounded-md">
                <SiLeetcode />
              </a>
              <a href="#" className="bg-blue-600 text-white p-3 rounded-md">
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <form className="space-y-4">
          <h3 className="text-xl font-semibold">Send Message</h3>
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Let's discuss..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 justify-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
