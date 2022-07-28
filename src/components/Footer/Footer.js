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
    <div className="w-full h-auto bg-orange what-we-do__header text-center px-[7rem] pt-[7rem] pb-[3rem] social-container">
      <p className="text-[2rem] text-[#ffffff] mb-[1rem] social">Built for:</p>
      <p className="text-[1.5rem] text-[#ffffff] flex justify-center items-center mt-[2rem] developer">
        Hashnode x PlanetScale Hackathon
      </p>
    </div>
  );
}
