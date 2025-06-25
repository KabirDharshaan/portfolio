import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Name Block */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-white bg-black px-2 rounded">Kabir</span>{" "}
          <span className="text-blue-600">Dharshaan</span>
        </h1>

        {/* Navigation */}
      <nav className="mt-4 sm:mt-0 space-x-6 text-sm sm:text-base font-medium text-black">
  <a href="#home" className="hover:underline">Home</a>
  <a href="#education" className="hover:underline">Education</a>
  <a href="#skills" className="hover:underline">Skills</a>
  <a href="#experience" className="hover:underline">Experience</a>
  <a href="#projects" className="hover:underline">Projects</a>
  <a href="#contact" className="hover:underline">Contact</a>
</nav>

      </div>
    </header>
  );
};

export default Header;
