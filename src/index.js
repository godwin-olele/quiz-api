import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/Auth/SignUp/SignUp"
import Login from "./components/Auth/Login/Login"
import { VerificationMessage, VerifyEmail } from "./components/Auth/Verifation"

import { StoreProvider as Provider } from "easy-peasy"
import Store from "./core/Store/Store"

import ProtectedRoutes from "./components/DashBoard/ProtectedRoutes"
import Home from "./components/DashBoard"
import ApiHelper from "./components/ApiHelper/ApiHelper"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='api' element={<ApiHelper />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route
          path='/auth/email-verification'
          element={<VerificationMessage />}
        />
        <Route path='/auth/verify' element={<VerifyEmail />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard/*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
