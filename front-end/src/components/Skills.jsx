import React from "react";

const skillsData = [
  {
    title: "React.js",
    description:
      "Building responsive SPAs with modern React patterns, hooks, and state management",
    level: "Advanced",
    progress: "w-3/4",
    color: "bg-blue-600",
  },
  {
    title: "Node.js & Express",
    description:
      "Backend development with RESTful APIs, middleware, and database integration",
    level: "Intermediate",
    progress: "w-3/4",
    color: "bg-green-500",
  },
  {
    title: "MongoDB & SQL",
    description:
      "Database design, optimization, and data modeling for scalable applications",
    level: "Advanced",
    progress: "w-[87.5%]",
    color: "bg-purple-600",
  },
  {
    title: "Tailwind CSS",
    description:
      "Rapid UI design with utility-first CSS framework and responsive design principles",
    level: "Expert",
    progress: "w-[97.5%]",
    color: "bg-blue-500",
  },
  {
    title: "Git & GitHub",
    description:
      "Version control, collaboration workflows, and project management with Git",
    level: "Advanced",
    progress: "w-[87.5%]",
    color: "bg-orange-500",
  },
  {
    title: "Java",
    description:
      "Data structures, algorithms, automation scripts and backend development",
    level: "Intermediate",
    progress: "w-3/4",
    color: "bg-yellow-500",
  },
];

const Skills = () => {
  return (
    <section  id="skills" className="w-full flex flex-col items-center text-center px-4 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-1">Technical Skills</h2>
      <div className="h-1 w-24 bg-blue-500 rounded-full mb-4"></div>

      {/* Description */}
      <p className="text-gray-600 max-w-xl mb-10">
        Here are the technologies and tools I work with to bring ideas to life.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              {skill.title}
            </h3>
            <p className="text-gray-700 mb-4">{skill.description}</p>

            <div className="text-sm text-gray-600 mb-1">Proficiency</div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs bg-gray-800 text-white rounded-full px-3 py-0.5">
                {skill.level}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className={`h-2 ${skill.color} rounded-full ${skill.progress}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
