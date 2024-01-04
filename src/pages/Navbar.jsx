// Navbar.jsx
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg flex items-center gap-3">
          <IoHomeOutline /> Number Finder
        </h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-white">
            <FiMenu />
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto`}>
          <ul className="text-white lg:flex">
            <li className="mr-4">
              <a href="#" className="hover:text-gray-300">
                Language
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-gray-300">
                High Score
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
