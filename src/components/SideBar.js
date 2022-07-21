import React, { useState, useCallback } from "react";
import { IoLogoEdge, IoBookmark } from "react-icons/io5";
import {
  BsImageFill,
  BsFillHandbagFill,
  BsFillStarFill,
  BsHouseFill,
} from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";



const Sidebar = ({ navigationData }) => {
  const [currentRoute, setCurrentRoute] = useState("Home");

  const renderIcon = useCallback((element) => {
    switch (element) {
      case "Dashboard":
        return <BsHouseFill />;
      case "Gallery":
        return <BsImageFill />;
      case "Store":
        return <BsFillHandbagFill />;
      case "Favorites":
        return <BsFillStarFill />;
      case "Saved":
        return <IoBookmark />;
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 w-14 bg-white flex flex-col h-screen justify-between items-center py-6 rounded-tr-4xl rounded-br-4xl">
      <span className="text-4xl text-gray-800">
        <IoLogoEdge />
      </span>
      <ul className="flex flex-col items-center w-full">
        {navigationData.map((element, index) => (
          <li
            key={index}
            className=""
            onClick={() => setCurrentRoute(element)}
          >
            {renderIcon(element)}
            <span
              className=""
            >
              {element}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-between items-center">
        <div className="w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center text-gray-800 text-lg relative mb-4">
          <span className="h-5 w-5 flex justify-center items-center text-white absolute -top-1 -right-1 bg-red-500 text-xs rounded-full">24</span>
          <FaRegBell />
        </div>
        <span className="text-3xl text-gray-400 hover:text-gray-800 cursor-pointer">
          <RiSettings4Fill />
        </span>
      </div>
    </nav>
  );
};

export default Sidebar;