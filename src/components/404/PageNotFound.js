import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div className="h-screen w-full flex what-we-do__header what-we-do__header-form">
        <div className="bg-[#f387047e] h-screen w-full px-[5rem] left-bg-api">
          <div className="w-full h-auto mt-[5rem] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <a href="/" className="brand-name">
                QuizAPI
              </a>
              <ul className="flex justify-between items-center text-[18px] font-medium text-[#454545] underline underline-offset-4 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div className=" w-full h-[400px] mt-[6rem] flex justify-center items-center">
              <img
                src="/images/abstract-fatal-error.gif"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section">
          <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center form-section-2">
            {/* main content */}
            <div className="w-[500px] h-auto">
              <h1 className="text-[70px] font-bolder">404</h1>
              <p className="text-[20px] font-semibold">
                Ooops! <br /> Page Not Found
              </p>
              <p className="text-[18px] text-[#999] font-medium mt-[1rem]">
                This page doesn't exist or was removed!
                <br /> We suggest you back to home
              </p>
              <button
                className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-[2rem] transition
               `}
                onClick={handleClick}
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
