import React from "react"
import { MdOutlineDashboard } from "react-icons/md"
import { IconContext } from "react-icons"
import Questions from "../Questions"
import AdminDashboard from "../Dashboard"
import Users from "../Users"

import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { useStoreActions, useStoreState } from "easy-peasy"

export default function AdminDashboardNav() {
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
        <div>
          <p className=' text-[18px] text-[#373737] font-semibold'>
            {username}
          </p>
          <p className='text-[#041CF3] text-right'>Admin</p>
        </div>
        <div>
          <img
            src={avatar}
            alt='user image'
            className='rounded-full w-[60px] h-[60px] object-cover'
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
      <main className='w-full h-auto bg-[#fafafa] p-[20px] flex'>
        <div className='w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav'>
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
          <Route path='/*' element={<AdminDashboard user={user} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/questions' element={<Questions />} />
          {/* <Route path='/search-questions' element={<SearchQuestions />} />
          <Route path='/questions' element={<Questions />} /> */}
        </Routes>

        {/*<SubmitQuestions/> <Feedback/> <Users/>   <AdminDashboard /> <SearchQuestions /> */}
      </main>
    </>
  )
}
