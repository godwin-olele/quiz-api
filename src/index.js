import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import UserDashboard from "./components/DashBoard/UserDashboard/UserDashboard";
import SubmitQuestions from "./components/DashBoard/SubmitQuestions/SubmitQuestions";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
        <Route path="user-dashboard" element={<UserDashboard />} />
        <Route path="submit-questions" element={<SubmitQuestions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
