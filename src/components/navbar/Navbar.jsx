
import React from "react";

const Navbar = () => {
  return (
    <nav className=" text-white py-16 px-24 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">My Logo</span>
      </div>
      <ul className="flex gap-12">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Services</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
      <button className="w-24 h-10 rounded-full bg-[#40CF06] text-black">Login</button>
    </nav>
  );
};

export default Navbar;
