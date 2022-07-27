import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconContext } from "react-icons";
import { TbArrowsUpLeft } from 'react-icons/tb';

export default function Categories() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header  relative ">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem] category-header-text">
          Categories
        </h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
      </div>
      <div
        className="grid grid-cols-4 gap-[20px] w-full mt-[4rem] scrolling-wrapper-flexbox"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="math w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Mathematics
          </p>
        </div>
        <div className="general-studies w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            General Studies
          </p>
        </div>
        <div className="programming w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Programming
          </p>
        </div>
        <div className="biology w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Biology
          </p>
        </div>
        <div className="engin w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Engineering
          </p>
        </div>
        <div className="animal w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Animal
          </p>
        </div>
        <div className="nature w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Nature
          </p>
        </div>
        <div className="science w-full h-[170px] rounded-[10px] p-[20px] relative card">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Science
          </p>
        </div>
      </div>
      <div className="w-auto h-[60px] mt-[1rem] absolute right-0 text-center hidden ux">
        <IconContext.Provider
          value={{ className: "scroll-arrow" }}
        >
          <div>
            <TbArrowsUpLeft />
          </div>
        </IconContext.Provider>
        <p className="text-[#535353]">Scroll to the left for more</p>
      </div>
    </div>
  );
}
