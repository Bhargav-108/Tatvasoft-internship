import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-screen z-50 flex flex-row justify-between bg-white drop-shadow-sm text-[36352d] p-6 px-16">
      <Link to="/">
        <h1 className="basis-2/4 text-xl font-semibold font-mono cursor-pointer">
          Bookstore
        </h1>
      </Link>

      <ul className="flex gap-8">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/About">About Us</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/Login">Login / Sign Up</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/Form">Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
