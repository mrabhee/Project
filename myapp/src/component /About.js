import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 h-vh">
      {/* Name Section */}
      <h1 className="text-3xl font-bold mb-4">Abhishek Patidar</h1>

      {/* Schooling Section */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Schooling</h2>
        <p className="text-gray-700">High School : Adarsh English Higher Secondary School</p>
        <p className="text-gray-700">Budha</p>
        <p className="text-gray-700">Year : 2019 - 2021</p>
      </div>

      {/* Bachelor's Degree Section */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Bachelor's Degree</h2>
        <p className="text-gray-700">University : Mandsaur University</p>
        <p className="text-gray-700">Degree : B.Tech in Computer Science</p>
        <p className="text-gray-700">Mandsaur</p>
        <p className="text-gray-700">Year : 2021 - 2025</p>
      </div>

      {/* Skills Section */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 list-none">
          <li>Java</li>
          <li>JavaScript</li>
          <li>Web Development</li>
          <li>React & Tailwind CSS</li>
        </ul>
      </div>

      {/* Download CV Button */}
      <a
        href="your-cv-link.pdf"
        download
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Download CV
      </a>
    </div>
  );
}

export default About;
