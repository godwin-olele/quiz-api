import React, { useState, useEffect } from "react"
import Questions from "../Questions"
import AdminDashboard from "../Dashboard"
import Users from "../Users"
import { IconContext } from "react-icons"
import { CgMenu } from "react-icons/cg"
import { CgMenuMotion } from "react-icons/cg"
import { BiSearchAlt } from "react-icons/bi"

import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { useStoreActions, useStoreState } from "easy-peasy"

export default function AdminDashboardNav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", changeWidth)

    return () => {
      window.removeEventListener("resize", changeWidth)
    }
  }, [])

  // store
  const user = useStoreState(({ User }) => User.user)
  const logoutUser = useStoreActions(({ User }) => User.logout)
  const logout = () => {
    logoutUser()
    window.location.href = "/"
  }

  const navigate = useNavigate()
  const params = useParams()

  const activeTab = params["*"]

  const { avatar, bio, first_name, id, last_name, username } = user

  const Nav = () => (
    <nav className='navigation-dashboard bg-[#fff]'>
      <a href='/' className='brand-name brand-name__mobile'>
        QuizAPI
      </a>
      <div className='big-screen__searchBar'>
        <div className='search-box'>
          <input
            className='search-input'
            type='text'
            placeholder='Search something..'
          />
          <button className='search-btn'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center avatar-and-name__container__mobile'>
        <div>
          <p className='text-[18px] text-[#373737] font-semibold userName__mobile'>
            {username}
          </p>
          <p className='text-[#041CF3] text-right'>Admin</p>
        </div>
        <div>
          <img
            src={avatar}
            alt='user image'
            className='rounded-full w-[50px] h-[50px] object-cover ml-[1rem] avatar__mobile'
          />
        </div>
      </div>
    </nav>
  )

  const tabs = [
    {
      title: "Dashboard",
      icon: "/images/icons/dashboard.svg",
      to: [""], // place the important route first
    },
    {
      title: "Users",
      icon: "/images/icons/supervised_user.svg",
      to: ["users"],
    },
    {
      title: "Questions",
      icon: "/images/icons/document.svg",
      to: ["questions"],
    },
  ]

  const TabTitle = ({ title, icon, isActive, link }) => (
    <Link to={link}>
      <div
        className={`flex justify-start items-center px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ${
          isActive && "border-r-2 border-orange text-orange"
        }`}
      >
        <img src={icon} alt='' className='w-[30px] h-[30px]' />
        <p className='text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]'>
          {title}
        </p>
      </div>
    </Link>
  )

  return (
    <>
      <Nav />
      <main className='w-full h-auto bg-[#fafafa] p-[20px] flex dashboard-bg__mobile'>
        <div className='w-full small-screen__searchBar flex justify-between items-center'>
          <div className='searchBox'>
            <input
              className='searchInput'
              type='text'
              name=''
              placeholder='Search'
            />
            <button className='searchButton'>
              <IconContext.Provider value={{ className: "menu-icon" }}>
                <BiSearchAlt />
              </IconContext.Provider>
            </button>
          </div>
          <button onClick={toggleNav} className='mt-[1rem] btn'>
            <IconContext.Provider value={{ className: "menu-icon" }}>
              <div>{toggleMenu ? <CgMenuMotion /> : <CgMenu />}</div>
            </IconContext.Provider>
          </button>
        </div>
        {(toggleMenu || screenWidth > 1000) && (
          <div className='w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav left-nav__mobile'>
            <div className='w-full h-auto grid grid-cols-1'>
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
            <div className='border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center logout-container__mobile'>
              <div
                onClick={logout}
                className='flex justify-start items-center w-full  px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] '
              >
                <img
                  src='/images/logout.png'
                  alt=''
                  className='w-[30px] h-[30px]'
                />
                <p className='text-[17px] text-[#4c4c4c] font-semibold ml-[1.5rem]'>
                  Log Out
                </p>
              </div>
            </div>
          </div>
        )}

        {/* content */}
        <Routes>
          <Route path='/*' element={<AdminDashboard user={user} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/questions' element={<Questions />} />
        </Routes>
      </main>
    </>
  )
}
