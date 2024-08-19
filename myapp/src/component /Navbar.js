import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-6 text-gray-300">
            <li className="hover:text-white">
              <a href="#home" className="block py-2 px-4">
                Home
              </a>
            </li>
            <li className="hover:text-white">
              <a href="#about" className="block py-2 px-4">
                About
              </a>
            </li>
            <li className="hover:text-white">
              <a href="#project" className="block py-2 px-4">
                Project
              </a>
            </li>
            <li className="hover:text-white">
              <a href="#contact" className="block py-2 px-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
