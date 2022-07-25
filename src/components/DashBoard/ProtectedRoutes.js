import React, { useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { isLoggedIn } from "../../core/api"

export default function ProtectedRoutes() {
  const [isAuth, setisAuth] = useState(isLoggedIn())

  // useEffect(() => {
  //   setisAuth(isLoggedIn())
  // }, [])

  return isAuth ? <Outlet /> : <Navigate to='/' />
}
