import React, { useState } from "react"
// import { MdOutlineDashboard } from "react-icons/md"
// import { IconContext } from "react-icons"
import Skeleton from "@mui/material/Skeleton"

// import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom"
// import { useStoreActions, useStoreState } from "easy-peasy"

export default function UserDashboardNav() {
  const Nav = () => (
    <nav
      className='navigation-dashboard bg-[#fff]'
      style={{ maxHeight: "90px" }}
    >
      <Skeleton variant='text' height={80} width={100} />

      <Skeleton variant='rectangular' className='search-form' height={60} />
      <div className='flex justify-between items-center gap-3'>
        <Skeleton variant='text' width={114} height={40} />

        <div>
          <Skeleton variant='circular' width={60} height={60} />
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

  const TabTitle = () => (
    <Skeleton
      variant='rectangular'
      height={80}
      className={`my-[2px] cursor-pointer hover:bg-[#c8c8c83a]`}
    />
  )

  return (
    <>
      <Nav />
      <main className='w-full h-auto bg-[#fafafa] p-[20px] flex'>
        <div className='w-[350px] mr-[3rem] min-h-screen rounded-[10px] bg-[#ffffff] py-[3rem] left-nav'>
          <div className='w-full h-auto grid grid-cols-1'>
            {tabs.map((t, index) => (
              <TabTitle key={index} />
            ))}
          </div>
          <div className='border-t-[1px] border-[#c4c4c47b] h-[200px] mt-[5rem] flex items-center'>
            <Skeleton
              variant='text'
              height={100}
              className='w-full px-[20px] py-[17px] cursor-pointer  hover:bg-[#c8c8c83a]'
            />
          </div>
        </div>

        {/* content */}
        <MainSkeleton />

        {/* <Routes>
          <Route path='/*' element={<Dashboard user={user} />} />
          <Route path='/submit-questions' element={<SubmitQuestions />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/search-questions' element={<SearchQuestions />} />
        </Routes> */}
      </main>
    </>
  )
}

const MainSkeleton = () => (
  <>
    {/* // show a skeleton here */}

    <div className='w-full h-screen grid grid-cols-3 gap-x-[50px] py-[3rem] px-[1rem]'>
      <div>
        <Skeleton
          className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'
          height={300}
        />
      </div>
      <div>
        <Skeleton
          className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'
          height={300}
        />
      </div>
      <div>
        <Skeleton
          className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'
          height={300}
        />
      </div>
      {/* <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'>
      </div>
      <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'>
        <Skeleton />
      </div>
      <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[0px] flex items-center relative'>
        <Skeleton />
      </div> */}
    </div>
  </>
)
