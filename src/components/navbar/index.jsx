import React from "react";

function Navbar() {
  return (
    <div className="ml-12 py-8 hidden md:flex justify-center items-center text-center">
      <ul className="flex gap-8 flex-col md:flex-row justify-center items-center cursor-pointer text-grayishBlue ">
        <li className="hover:text-darkGrayishBlue">Collections</li>
        <li className="hover:text-darkGrayishBlue">Men</li>
        <li className="hover:text-darkGrayishBlue">Women</li>
        <li className="hover:text-darkGrayishBlue">About</li>
        <li className="hover:text-darkGrayishBlue">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
