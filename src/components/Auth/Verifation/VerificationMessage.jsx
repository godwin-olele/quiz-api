import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VerificationMessage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex what-we-do__header what-we-do__header-form">
      <div className="left-bg-login h-screen w-full px-[5rem]">
        <div className="w-full h-auto mt-[5rem] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <a href="/" className="brand-name">
              QuizAPI
            </a>
            <ul className="flex justify-between items-center w-[130px] text-[18px] font-medium text-[#454545] underline underline-offset-4 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/api">Api</Link>
              </li>
            </ul>
          </div>
          <div className=" w-full h-[400px] mt-[6rem] flex justify-center items-center">
            <img src="/images/flame-1235.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section">
        <div className="mt-[-2rem] w-[450px] form-section-2">
          <h1 className="text-[#000000] text-[1.7rem] font-medium">
            You are almost in!
          </h1>
          <p className="font-medium text-[#454545] mt-[1rem]">
            verify your email
          </p>

          <div className="mt-[3rem] md:w-full w-full">
            <p className="font-medium text-[#454545] mt-[1rem] mb-[1rem]">
              We have sent you an email, so you can continue from there. check
              your inbox!
            </p>
            <img
              src="/images/email-verification.png"
              alt="email-verification"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
