import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useStoreState } from "easy-peasy";
import Typed from "react-typed";

export default function CallToAction() {
  const statistics = useStoreState(({ Statistics }) => Statistics.statistics);

  const [happyCustomer, setHappyCustomer] = useState(0);
  const [onlineQuestion, setOnlineQuestion] = useState(0);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    setHappyCustomer(statistics?.users["Total Users"]);
    setOnlineQuestion(statistics?.question.all_questions);
    setCategory(Object.keys(statistics?.category)?.length);
  }, []);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let navigateToSignUp = useNavigate();
  function handleClickSignup() {
    navigateToSignUp("/Signup");
  }

  let navigateToLogin = useNavigate();
  function handleClickLogin() {
    navigateToLogin("/Login");
  }

  return (
    <div className="px-[7rem] w-full h-[800px] flex justify-between items-center call-to-action-container">
      <div className=" w-[1300px] h-auto call-to-action-sub__container">
        <h1
          className="text-[3vw] font-medium call-to-action-header h-auto"
          data-speed="0.95"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          The Quiz Bank contains a wide number of{" "}
          <span className="text-[#041CF3]">
            <Typed
              strings={[
                "mathematics",
                "animal",
                "entertainment",
                "chemistry",
                "history",
                "biology",
              ]}
              typeSpeed={80}
              backSpeed={30}
              loop
            />
          </span>{" "}
          questions.
        </h1>
        <p className="mt-[1rem] text-[22px] font-medium text-[#373737] call-to-action-sub__text">
          Quiz Bank API is proudly powered by PlanetScale database. Easily embed
          a quiz or create a practice test using our API.
        </p>
        <div className="flex justify-between items-center w-full mt-[3rem] auth-btn-container">
          <button
            className="rounded-[10px] border-2 text-[20px] w-full border-orange font-medium  bg-orange py-[10px] px-[40px] text-[#fff] auth-btn-1 "
            onClick={handleClickLogin}
          >
            Login
          </button>
          <button
            className="rounded-[10px] py-[10px] px-[40px] w-full border-2 text-[20px] border-orange font-medium text-orange ml-[3rem] auth-btn-container-2"
            onClick={handleClickSignup}
          >
            Sign-Up
          </button>
        </div>
        <div className="w-full h-auto mt-[4rem] flex justify-between items-center site-info">
          <div className=" w-full h-auto first-box">
            <h1 className="text-[30px] font-medium site-info-1">
              <CountUp
                isCounting
                end={happyCustomer}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>

            <p className="text-[1.1rem] text-[#373737] site-info-1__subtext">
              Happy Customer
            </p>
          </div>
          <div className="w-full h-auto ml-[2.5rem] second-box">
            <h1 className="text-[30px] font-medium site-info-1">
              <CountUp
                isCounting
                end={onlineQuestion}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>
            <p className="text-[1.1rem] text-[#373737] site-info-1__subtext">
              Online Questions
            </p>
          </div>
          <div className="w-full h-auto ml-[2.5rem] third-box">
            <h1 className="text-[30px] font-medium site-info-1">
              <CountUp
                isCounting
                end={category}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>
            <p className="text-[1.1rem] text-[#373737] site-info-1__subtext">
              Categories
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1400px] h-auto ml-[5rem] img-right">
        <img src="/images/landing-page.png" alt="" className="w-full" />
      </div>
    </div>
  );
}
