import React from "react";

const Statement = () => {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-1">Personal Statement</h2>
      <div className="h-1 w-24 bg-blue-500 rounded-full mb-6"></div>

      {/* Statement Card */}
      <div className="bg-blue-50 text-gray-800 p-10 rounded-2xl shadow-lg max-w-5xl w-full">
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          I'm deeply interested in full-stack development and AI integration and have been exploring it through hands-on projects, internships, and hackathons. I thrive in collaborative, fast-paced environments and aim to build impactful digital products that solve real-world problems. My passion lies in creating seamless user experiences backed by robust, scalable architecture.
        </p>

        {/* Summary Inside Card */}
        <div className="flex flex-wrap justify-center gap-10 text-base sm:text-lg font-semibold text-gray-800">
          <div>
            <span className="text-blue-600 text-xl font-bold">40+</span> hours of coding weekly
          </div>
          <div>
            <span className="text-blue-600 text-xl font-bold">10+</span> technologies mastered
          </div>
          <div>
            <span className="text-blue-600 text-xl font-bold">3+</span> major projects completed
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
