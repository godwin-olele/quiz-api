import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollStyle, setScrollStyle] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

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
          ? "sticky top-0 z-50 bg-[#ffffff] border-b-[1px] border-[#c2c2c268]  animate-fade-in-down"
          : "bg-[#fff] w-full h-[100px] animate-fade-in-up"
      }
    >
      <a href="/" className="brand-name">
        QuizAPI
      </a>
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/about">Api</a>
          </li>
          <li className="items">
            <a href="#features">Features</a>
          </li>
          <li className="items">
            <a href="#footer">Attribute</a>
          </li>
        </ul>
      )}
      <div className="flex justify-between items-center w-[310px] nav-auth">
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

      <button onClick={toggleNav} className="btn">
        <IconContext.Provider value={{ className: "scroll-arrow" }}>
          <div>{toggleMenu ? <CgMenuMotion /> : <CgMenu />}</div>
        </IconContext.Provider>
      </button>
    </nav>
  );
}
