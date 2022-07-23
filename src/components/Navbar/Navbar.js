import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [scrollStyle, setScrollStyle] = useState(false);

  useEffect(() => {
    const changeNavbarStyle = () => {
      if (window.scrollY >= 150) {
        setScrollStyle(true);
      } else {
        setScrollStyle(false);
      }
    };
    window.addEventListener("scroll", changeNavbarStyle);
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
    <nav
      className={
        scrollStyle
          ? "navigation sticky top-0 z-50 bg-[#ffffff] border-[1px] border-b-[#c2c2c268]  animate-fade-in-down"
          : "navigation bg-[#fff] animate-fade-in-up"
      }
    >
      <a href="/" className="brand-name">
        QuizAPI
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
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
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Api</a>
          </li>
          <li>
            <a href="/contact">Quiz</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact">Attribute</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center w-[310px]">
        <button
          className="rounded-[10px] border-2 text-[18px] border-orange font-medium py-[10px] px-[40px] text-orange"
          onClick={handleClickLogin}
        >
          Login
        </button>
        <button
          className="rounded-[10px] py-[10px] px-[40px] border-2 text-[18px] border-orange font-medium  bg-orange text-[#fff]"
          onClick={handleClickSignup}
        >
          Sign-Up
        </button>
      </div>
    </nav>
  );
}
