import React, { useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website Clone",
      description:
        "A full-featured e-commerce website clone with cart, checkout, and payment integration.",
      image: "ecommerce.png", // replace with your image paths
      link: "#",
    },
    {
      id: 2,
      title: "Room Locator Website",
      description:
        "A platform to find and book rooms based on location and preferences.",
      image: "room-locator.png",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase skills, projects, and contact information.",
      image: "portfolio.png",
      link: "#",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setNewProject({ title: "", description: "", image: "", link: "" });
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Projects
      </h1>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Project
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
              <input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                placeholder="Project Title"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <textarea
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                placeholder="Project Description"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="image"
                value={newProject.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="link"
                value={newProject.link}
                onChange={handleInputChange}
                placeholder="Project Link"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
