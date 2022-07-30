import React, { useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useStoreState } from "easy-peasy"

import { isLoggedIn } from "../../core/api"

export default function ProtectedRoutes() {
  // store
  const isAuth = useStoreState(({ User }) => User.isAuthenticated)

  // const [isAuth, setisAuth] = useState(isLoggedIn())

  // useEffect(() => {
  //   setisAuth(isLoggedIn())
  // }, [])

  return isAuth ? <Outlet /> : <Navigate to='/' />
}
