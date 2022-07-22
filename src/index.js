import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/Auth/SignUp/SignUp"
import Login from "./components/Auth/Login/Login"
import Verification from "./components/Auth/Verifation/"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/auth/verify' element={<Verification />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
