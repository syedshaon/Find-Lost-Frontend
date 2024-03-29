// Navbar.jsx
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Button = ({ text, color, hoverBG }) => {
  return <button className={`h-11 p-2.5 border cursor-pointer transition duration-200   ease ${hoverBG === "emerald" ? "hover:text-white border hover:border-white hover:bg-blue-500" : "hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500"}   ${color === "emerald" ? "text-white bg-blue-500" : "text-black border border-blue-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium `}>{text}</button>;
};

const NavElmnt = ({ children }) => <li className="cursor-pointer hover:underline  transition-all  underline-offset-4 decoration-blue-500 p-2.5 min-w-[123px] px-4 space-x-2.5 text-black text-base font-medium ">{children}</li>;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="h-[84px] bg-blue-500 bg-gradient-to-r from-white to-blue-500    py-5">
      <div className="container  px-2 md:px-7  mx-auto    flex justify-between items-center">
        <NavLink to="/">
          <h1 className="flex items-start space-x-1">
            <span className="text-black text-xl font-bold ">Find</span>
            <span className="text-blue-500 text-xl font-bold ">Us!</span>
          </h1>
          <small className="text-sm">As Fast As You Can!</small>
        </NavLink>

        <nav className=" flex   items-center space-x-30">
          <NavLink to="/high-score">
            <Button text="High Scores" color="emerald" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
