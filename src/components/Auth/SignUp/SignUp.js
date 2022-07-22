import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="h-screen w-full flex what-we-do__header">
      <div className="left-bg h-screen w-full px-[5rem]">
        <div className="w-full h-auto mt-[5rem] flex justify-between items-center">
          <a href="/" className="brand-name">
            QuizAPI
          </a>
          <ul className="flex justify-between items-center w-[130px] text-[18px] font-medium text-[#454545] underline underline-offset-4 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">Api</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#fff] w-[1700px] h-screen flex justify-center items-center">
        <div className="mt-[-2rem] w-[450px]">
          <h1 className="text-[#000000] text-[1.7rem] font-medium">
            Create New Account
          </h1>
          <p className="font-medium text-[#454545] mt-[1rem]">
            Already a member?
            <Link
              to="/Login"
              className="border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto ml-1"
            >
              Login
            </Link>
          </p>
          <form className="mt-[3rem] md:w-full w-full">
            <label htmlFor="username" className="text-[#454545]">
              Username
            </label>
            <input
              type="text"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="Username"
              autoComplete="true"
            />
            <label htmlFor="username" className="text-[#454545]">
              Email
            </label>
            <input
              type="email"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="email"
              autoComplete="true"
            />
            <br />
            <label htmlFor="username" className="text-[#454545]">
              Password
            </label>
            <div className=" mt-[0.5rem] flex justify-center items-center ">
              <input
                type={`${showRetypePassword ? "text" : "password"}`}
                className="w-full h-[52px] py-[13px] px-[20px] rounded-l-[6px] border-r-[0px] "
                name="confirmPassword"
                autoComplete="false"
              />
              <div
                className="w-[50px] h-[52px] rounded-r-[6px] border-[1px] cursor-pointer flex justify-center items-center border-l-[0px]"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
              >
                {showRetypePassword ? (
                  <IconContext.Provider
                    value={{ color: "#454545", className: "see-password" }}
                  >
                    <HiEyeOff />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{ color: "#454545", className: "see-password" }}
                  >
                    <HiEye />
                  </IconContext.Provider>
                )}
              </div>
            </div>
            <br />
            <label htmlFor="username" className="text-[#454545]">
              Retype Password
            </label>
            <div className=" mt-[0.5rem] mb-[2rem] flex justify-center items-center ">
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="w-full h-[52px] py-[13px] px-[20px] rounded-l-[6px] border-r-[0px]"
                name="confirmPassword"
                autoComplete="false"
              />
              <div
                className="w-[50px] h-[52px] rounded-r-[6px] border-[1px] cursor-pointer flex justify-center items-center border-l-[0px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IconContext.Provider
                    value={{ color: "#454545", className: "see-password" }}
                  >
                    <HiEyeOff />
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{ color: "#454545", className: "see-password" }}
                  >
                    <HiEye />
                  </IconContext.Provider>
                )}
              </div>
            </div>

            <button
              className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition
               `}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}