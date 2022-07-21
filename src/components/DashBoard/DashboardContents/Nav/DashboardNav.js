import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IconContext } from "react-icons";
import Dashboard from "../Dashboard/Dashboard";
import SubmitQuestions from "../SubmitQuestions/SubmitQuestions";
import Feedback from "../Feedback/Feedback";
import SearchQuestions from "../SearchQuestions/SearchQuestions";

export default function DashboardNav() {
  const userProfile = {
    name: "James Mark",
    imagePath:
      "https://images.pexels.com/photos/8783902/pexels-photo-8783902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <>
      <nav className="navigation-dashboard bg-[#fff]">
        <a href="/" className="brand-name">
          QuizAPI
        </a>
        <button className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <form
          onsubmit="event.preventDefault();"
          role="search"
          className="search-form"
        >
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button type="submit" className="submit">
            Go
          </button>
        </form>
        <div className="flex justify-between items-center w-[200px]">
          <p className=" text-[18px] text-[#373737] font-semibold">
            {userProfile.name}
          </p>
          <div>
            <img
              src={userProfile.imagePath}
              alt="user image"
              className="rounded-full w-[60px] h-[60px] object-cover"
            />
          </div>
        </div>
      </nav>
      <main className="w-full h-auto bg-[#fafafa] p-[20px] flex ">
        <div className="w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav">
          <div className="w-full h-auto grid grid-cols-1">
            <div className="border-r-2 border-orange flex justify-start items-center px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ">
              <img
                src="/images/Dashboard.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
                Dashboard
              </p>
            </div>
            <div className="flex justify-start items-center  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ">
              <img
                src="/images/submit.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
                Submit Questions
              </p>
            </div>
            <div className="flex justify-start items-center  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ">
              <img
                src="/images/Feedback.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
                Feedback
              </p>
            </div>
            <div className="flex justify-start items-center  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ">
              <img
                src="/images/search.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[18px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
                Search Questions
              </p>
            </div>
          </div>
          <div className="border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center">
            <div className="flex justify-start items-center w-full  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ">
              <img
                src="/images/logout.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
              <p className="text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
                Log Out
              </p>
            </div>
          </div>
        </div>
        <Dashboard />

        {/*<SubmitQuestions/> <Feedback/>  <SearchQuestions /> */}
      </main>
    </>
  );
}
