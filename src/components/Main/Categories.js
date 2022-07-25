import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Categories() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem]">Categories</h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
      </div>
      <div
        className="grid grid-cols-4 gap-[20px] w-full mt-[4rem]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="math w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Mathematics
          </p>
        </div>
        <div className="general-studies w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            General Studies
          </p>
        </div>
        <div className="programming w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Programming
          </p>
        </div>
        <div className="biology w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Biology
          </p>
        </div>
        <div className="engin w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Engineering
          </p>
        </div>
        <div className="animal w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Animal
          </p>
        </div>
        <div className="nature w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Nature
          </p>
        </div>
        <div className="science w-full h-[170px] rounded-[10px] p-[20px] relative">
          <p className="mt-[1rem] text-[22px] font-medium text-[#ffffff] absolute bottom-[2rem]">
            Science
          </p>
        </div>
      </div>
    </div>
  );
}
