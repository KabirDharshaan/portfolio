import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import projectImg from "../assets/Screenshot 2025-06-25 092129.png";
import progress from "../assets/Screenshot 2025-06-25 093634.png"
import pitchit from "../assets/Screenshot 2025-06-25 094017.png" 

const projects = [
  {
    name: "DLM website",
    year: "2024-25",
    description:
      "A basic DLM webiste ,i done for my intership while im working with on startup compnay for one month",
    tools: ["React.js","tailwind_CSS"],
    github: "https://github.com/Kabir-dharshaaan-tech/DLM_WEBSITE_2",
    demo: "https://dlm-website-2-ihgm.vercel.app/",
    image: projectImg,
  },
  {
    name: "Pich It",
    year: "2025",
    description:
      "A webiste where u can post ur starup idea,or pitch ur idea by that u can get investors",
    tools: ["React", "Tailwind", "Vite","MongoDB","express.js"],
    github: "https://github.com/kalviumcommunity/s81_Kabir_Capstone_Pitchit",
    demo: "#",
    image: pitchit,
  },
  {
    name: "Progress_tracker",
    year: "2024",
    description:
      "i create a progress tracker website for my squad ",
    tools: [ "tailwindcss", "React", "Chart.js"],
    github: "https://github.com/Kabir-dharshaaan-tech/progress.Tracker_s81",
    demo: "https://progress-tracker-s81.vercel.app/",
    image: progress,
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <div className="h-1 w-24 bg-blue-500 mx-auto my-3 rounded-full"></div>
      <p className="mb-10 text-gray-600 max-w-xl mx-auto">
        Here are some of my recent projects that showcase my skills and passion for development.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 text-left flex flex-col items-start"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            <p className="text-gray-600 my-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 border rounded-md"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                <BsBoxArrowUpRight /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
