// Navbar.jsx
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-white font-bold text-lg flex items-center gap-3">
            <IoHomeOutline /> Number Finder
          </h1>
        </NavLink>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-white">
            <FiMenu />
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto`}>
          <ul className="text-white lg:flex">
            <li className="mr-4">
              <NavLink to="/">
                <a href="#" className="hover:text-gray-300">
                  Language
                </a>
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/high-score">
                <a href="#" className="hover:text-gray-300">
                  High Score
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
