import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div><img src="./images/logo.png" alt="logo" loading="lazy" className="w-24 h-auto md:w-32 lg:w-48"/></div>
        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-6 text-gray-300">
            <li className="hover:text-white">
              <NavLink to="/" className="[&.active]:text-white [&.active]:underline focus:underline-offset-4 block py-2 px-4">
                Home
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink to="/about" className="[&.active]:text-white [&.active]:underline focus:underline-offset-4 block py-2 px-4">
                About
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink to="/project" className="[&.active]:text-white [&.active]:underline focus:underline-offset-4 block py-2 px-4">
                Project
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink to="/contact" className="[&.active]:text-white [&.active]:underline focus:underline-offset-4 block py-2 px-4">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
