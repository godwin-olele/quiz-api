import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-3 gap-x-[50px] py-[3rem] px-[1rem]">
        <div className="left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
   
          <div>
          <div className="bg-orange w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">24</h1>
            <p className="text-[20px] text-[#4c4c4c]">Submitted Questions</p>
          </div>
        </div>
        <div className="left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#31d161] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">20</h1>
            <p className="text-[20px] text-[#4c4c4c]">Verified Questions</p>
          </div>
        </div>
        <div className="left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#dd2c2c] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">4</h1>
            <p className="text-[20px] text-[#4c4c4c]">Unverified Questions</p>
          </div>
        </div>
      </div>
    </>
  );
}
