import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CallToAction() {
  const [happyCustomer, setHappyCustomer] = useState(44);
  const [onlineQuestion, setOnlineQuestion] = useState(30);
  const [category, setCategory] = useState(2);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="px-[7rem] w-full h-[800px] flex justify-between items-center">
      <div className=" w-[1300px] h-auto">
        <h1
          className="text-[50px] font-medium"
          data-speed="0.95"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        >
          The Quiz Api Includes a wide number of{" "}
          <span className="text-[#041CF3]">Math’s</span> Questions
        </h1>
        <p
          className="mt-[1rem] text-[22px] font-medium text-[#373737]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          Test your knowledge or easily embed a quiz on your website with the
          quiz api
        </p>
        <div className="flex justify-between items-center w-full mt-[3rem]">
          <button className="rounded-[10px] border-2 text-[20px] w-full border-orange font-medium  bg-orange py-[10px] px-[40px] text-[#fff] ">
            Login
          </button>
          <button className="rounded-[10px] py-[10px] px-[40px] w-full border-2 text-[20px] border-orange font-medium text-orange ml-[3rem]">
            Sign-Up
          </button>
        </div>
        <div className="w-full h-auto mt-[4rem] flex justify-between items-center site-info">
          <div className=" w-full h-auto">
            <h1 className="text-[30px] font-medium">
              <CountUp
                isCounting
                end={happyCustomer}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>

            <p className="text-[1.1rem] text-[#373737]">Happy Customer</p>
          </div>
          <div className="w-full h-auto ml-[2.5rem]">
            <h1 className="text-[30px] font-medium">
              <CountUp
                isCounting
                end={onlineQuestion}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>
            <p className="text-[1.1rem] text-[#373737]">Online Questions</p>
          </div>
          <div className="w-full h-auto ml-[2.5rem]">
            <h1 className="text-[30px] font-medium">
              <CountUp
                isCounting
                end={category}
                easing="linear"
                duration={3.5}
              />
              K&nbsp;+
            </h1>
            <p className="text-[1.1rem] text-[#373737]">Categories</p>
          </div>
        </div>
      </div>
      <div className="w-[1400px] h-auto ml-[5rem]">
        <img src="/images/landing-page.png" alt="" className="w-full" />
      </div>
    </div>
  );
}
