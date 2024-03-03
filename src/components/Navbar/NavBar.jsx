import React from "react";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
      <span>
      Social Media {" "}
        </span> 
        App
      </div>
      <div className="flex justify-center items-center mx-auto"><NavLinks></NavLinks></div>
      <div></div>
    </div>
  );
};

export default NavBar;
