import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiLoveMystery } from "react-icons/gi";

export default function Footer() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="w-full h-auto bg-orange what-we-do__header text-center px-[7rem] py-[7rem] ">
      <p className="text-[2rem] text-[#ffffff] mb-[1rem]">Socials</p>
      {isHovering && <h2>Hello world</h2>}
      <div className="flex justify-between items-center w-[200px] h-auto cursor-pointer my-0 mx-auto">
        <div
          className="w-[50px] h-[50px]"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="/images/twitter.png" alt="twitter" />
        </div>
        
        <div
          className="w-[50px] h-[50px] cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="/images/instagram.png" alt="instagram" />
        </div>
        <div
          className="w-[50px] h-[50px] cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src="/images/facebook.png" alt="facebook" />
        </div>
      </div>
      <p className="text-[1.5rem] text-[#ffffff] flex justify-center items-center mt-[3rem]">
        Made with{" "}
        <IconContext.Provider
          value={{ color: "red", className: "global-class-name" }}
        >
          <GiLoveMystery />
        </IconContext.Provider>{" "}
        By Bovage
      </p>
    </div>
  );
}
