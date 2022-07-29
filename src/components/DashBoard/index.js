import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import UserDashboard from "./UserDashboard/UserDashboard"
import AdminDashboard from "./AdminDashboard/AdminDashboard"
import Users from "./AdminDashboard/DashboardContents/Users"
import Questions from "./UserDashboard/DashboardContents/Questions"

import { useNavigate } from "react-router-dom"
import { getUserDetails } from "../../core/api"

// imports
import { useStoreActions, useStoreState } from "easy-peasy"

function Home() {
  const fetchUserDetails = useStoreActions(({ User }) => User.fetchUserDetails)

  const navigate = useNavigate()
  const fetchData = async () => {
    fetchUserDetails()
      .then((data) => {
        // console.log("data", data)
        if (data == "unauthorized") {
          navigate("/Login") // add queryString
          localStorage.clear()
        }
      })
      .catch((e) => console.log("error", e))

    // getUserDetails()
    //   .then(({ data: res }) => {
    //     const { status, message, data } = res

    //     console.log(res)
    //     if (status == "success") {
    //       actions.setLoading(false)
    //       actions.setUser(data)
    //     }
    //   })
    //   .catch((e) => {
    //     // console.log(e)
    //     if (e?.response) {
    //       // const {data: {status, message, error}} = e.response
    //       if (e.response.status == 401) {
    //         navigate("/Login") // add queryString
    //         localStorage.clear()
    //       }
    //     }
    //   })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Routes>
        <Route path='/*' element={<UserDashboard />} index />

        {/* user stuff test */}
        {/* <Route path='/q' element={<Questions />} /> */}

        {/* admin stuff test */}
        <Route path='/admin/*' element={<AdminDashboard />} />
        <Route path='/users' element={<Users />} />

        {/* <Route path='*' element={<h1>Page does not exits</h1>} /> */}
      </Routes>
    </>
  )
}

export default Home
