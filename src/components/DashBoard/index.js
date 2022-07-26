import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import UserDashboard from "./UserDashboard/UserDashboard"
import SubmitQuestions from "./DashboardContents/SubmitQuestions/SubmitQuestions"
import Feedback from "./DashboardContents/Feedback/Feedback"
import SearchQuestions from "./DashboardContents/SearchQuestions/SearchQuestions"
import AdminDashboard from "./AdminDashboard/AdminDashboard"
import Users from "./DashboardContents/Users/Users"
import Questions from "./DashboardContents/Questions/Questions"

import { useNavigate } from "react-router-dom"

// imports
import { useStoreActions, useStoreState } from "easy-peasy"

function Home() {
  // const user = useStoreState(({ User }) => User.user)
  const fetchUserDetails = useStoreActions(({ User }) => User.fetchUserDetails)

  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      fetchUserDetails()
    } catch (e) {
      navigate("/Login")
      localStorage.clear()
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Routes>
        <Route path='/*' element={<UserDashboard />} index/>
        {/* <Route path='/submit-questions' element={<SubmitQuestions />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/search-questions' element={<SearchQuestions />} /> */}
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/users' element={<Users />} />
        {/* <Route path='/questions' element={<Questions />} /> */}
        {/* <Route path='*' element={<h1>Page does not exits</h1>} /> */}
      </Routes>
    </>
  )
}

export default Home
