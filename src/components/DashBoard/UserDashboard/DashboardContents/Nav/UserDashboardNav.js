import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import SubmitQuestions from "../SubmitQuestions";
import Feedback from "../Feedback";
import SearchQuestions from "../SearchQuestions";
import Questions from "../Questions";
import { IconContext } from "react-icons";
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";


import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function UserDashboardNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  // store
  const user = useStoreState(({ User }) => User.user);
  const logoutUser = useStoreActions(({ User }) => User.logout);
  const logout = () => {
    logoutUser();
    window.location.href = "/";
  };

  const navigate = useNavigate();
  const params = useParams();

  const activeTab = params["*"];

  const { avatar, bio, first_name, id, last_name, username } = user;

  const Nav = () => (
    <nav className="navigation-dashboard bg-[#fff]">
      <a href="/" className="brand-name brand-name__mobile">
        QuizAPI
      </a>
      <div className="big-screen__searchBar">
        <div class="search-box">
          <input
            class="search-input"
            type="text"
            placeholder="Search something.."
          />
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center avatar-and-name__container__mobile">
        <p className=" text-[18px] text-[#373737] font-semibold userName__mobile">
          {username}
        </p>
        <div>
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-[50px] h-[50px] object-cover ml-[1rem] avatar__mobile"
          />
        </div>
      </div>
    </nav>
  );

  const tabs = [
    {
      title: "Dashboard",
      icon: "/images/Dashboard.png",
      to: ["", "questions"], // place the important route first
    },
    {
      title: "Submit Questions",
      icon: "/images/submit.png",
      to: ["submit-questions"],
    },
    {
      title: "Feedback",
      icon: "/images/Feedback.png",
      to: ["submit-feedback"],
    },
    {
      title: "Search Questions",
      icon: "/images/search.png",
      to: ["search-questions"],
    },
  ];

  const TabTitle = ({ title, icon, isActive, link }) => (
    <Link to={link}>
      <div
        className={`flex justify-start items-center px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ${
          isActive && "border-r-2 border-orange text-orange"
        }`}
      >
        <img src={icon} alt="" className="w-[30px] h-[30px]" />
        <p className="text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]">
          {title}
        </p>
      </div>
    </Link>
  );

  return (
    <>
      <Nav />
      <main className="w-full h-auto bg-[#fafafa] p-[20px] flex dashboard-bg__mobile">
        <div className="w-full small-screen__searchBar flex justify-between">
          <div class="search-box">
            <input
              class="search-input"
              type="text"
              placeholder="Search something.."
            />
            <button class="search-btn">
              <IconContext.Provider value={{ className: "search-btn" }}>
                <CgMenuMotion />
              </IconContext.Provider>
            </button>
          </div>
          <button onClick={toggleNav} className="mt-[1rem]">
            <IconContext.Provider value={{ className: "menu-icon" }}>
              <div>{toggleMenu ? <CgMenuMotion /> : <CgMenu />}</div>
            </IconContext.Provider>
          </button>
        </div>
        {(toggleMenu || screenWidth > 1000) && (
          <div className="w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav left-nav__mobile">
            <div className="w-full h-auto grid grid-cols-1">
              {tabs.map(({ title, icon, to }, index) => (
                <TabTitle
                  title={title}
                  icon={icon}
                  isActive={to.includes(activeTab)}
                  link={to[0]}
                  key={index}
                />
              ))}
            </div>
            <div className="border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center logout-container__mobile">
              <div
                onClick={logout}
                className="flex justify-start items-center w-full  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] "
              >
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
        )}

        {/* content */}
        <Routes>
          <Route path="/*" element={<Dashboard user={user} />} />
          <Route path="/submit-questions" element={<SubmitQuestions />} />
          <Route path="/submit-feedback" element={<Feedback />} />
          <Route path="/search-questions" element={<SearchQuestions />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </main>
    </>
  );
}
