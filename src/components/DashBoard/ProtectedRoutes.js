import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import { isLoggedIn } from "../../core/api"

export default function ProtectedRoutes() {
  const isAuth = true
  //   isLoggedIn()

  return isAuth ? <Outlet /> : <Navigate to='/' />
}
