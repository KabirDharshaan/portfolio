import React from "react";

const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 border-b pb-1">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-lg">Kalvium WIL – Jan 2024 to May 2024</h3>
          <ul className="list-disc ml-6">
            <li>Built production-ready web apps in a team of 5</li>
            <li>Wrote clean reusable code and followed Git workflows</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Open Source Contributor – 2023</h3>
          <ul className="list-disc ml-6">
            <li>Participated in Hacktoberfest and other contributions</li>
            <li>Fixed bugs and improved documentation for React-based repos</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
