import React, { useState } from "react"
import { MdOutlineDashboard } from "react-icons/md"
import { IconContext } from "react-icons"
import Dashboard from "../Dashboard"
import SubmitQuestions from "../SubmitQuestions"
import Feedback from "../Feedback"
import SearchQuestions from "../SearchQuestions"
import Questions from "../Questions"

import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { useStoreActions, useStoreState } from "easy-peasy"

export default function UserDashboardNav() {
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

  // const loadingUserState = useStoreActions

  const { avatar, bio, first_name, id, last_name, username } = user

  const Nav = () => (
    <nav className='navigation-dashboard bg-[#fff]'>
      <a href='/' className='brand-name'>
        QuizAPI
      </a>
      <button className='hamburger'>
        {/* icon from heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        role='search'
        className='search-form'
      >
        <input
          id='search'
          type='search'
          placeholder='Search...'
          autoFocus
          required
        />
        <button type='submit' className='submit'>
          Go
        </button>
      </form>
      <div className='flex justify-between items-center w-[200px]'>
        <p className=' text-[18px] text-[#373737] font-semibold'>{username}</p>
        <div>
          <img
            src={avatar}
            alt='avater'
            className='rounded-full w-[60px] h-[60px] object-cover'
          />
        </div>
      </div>
    </nav>
  )

  const tabs = [
    {
      title: "Dashboard",
      icon: "/images/Dashboard.png",
      to: "",
    },
    {
      title: "Submit Questions",
      icon: "/images/submit.png",
      to: "submit-questions",
    },
    {
      title: "Feedback",
      icon: "/images/Feedback.png",
      to: "feedback",
    },
    {
      title: "Search Questions",
      icon: "/images/search.png",
      to: "search-questions",
    },
  ]

  const TabTitle = ({ title, icon, isActive, link }) => (
    <Link to={link}>
      <div
        className={`flex justify-start items-center px-[20px] py-[17px] cursor-pointer hover:bg-[#c8c8c83a] ${
          isActive && "border-r-2 border-orange"
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
      <main className='w-full h-auto bg-[#fafafa] p-[20px] flex'>
        <div className='w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav'>
          <div className='w-full h-auto grid grid-cols-1'>
            {tabs.map(({ title, icon, to }, index) => (
              <TabTitle
                title={title}
                icon={icon}
                isActive={activeTab == to}
                link={to}
                key={index}
              />
            ))}
          </div>
          <div className='border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center'>
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

        {/* content */}
        <Routes>
          <Route path='/*' element={<Dashboard user={user} />} />
          <Route path='/submit-questions' element={<SubmitQuestions />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/search-questions' element={<SearchQuestions />} />
          <Route path='/questions' element={<Questions />} />
        </Routes>
      </main>
    </>
  )
}
