import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/Auth/SignUp/SignUp";
import Login from "./components/Auth/Login/Login";
import UserDashboard from "./components/DashBoard/UserDashboard/UserDashboard";
import SubmitQuestions from "./components/DashBoard/DashboardContents/SubmitQuestions/SubmitQuestions";
import Feedback from "./components/DashBoard/DashboardContents/Feedback/Feedback";
import SearchQuestions from "./components/DashBoard/DashboardContents/SearchQuestions/SearchQuestions";
import AdminDashboard from "./components/DashBoard/AdminDashboard/AdminDashboard";
import Users from "./components/DashBoard/DashboardContents/Users/Users";

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
        <Route path="feedback" element={<Feedback />} />
        <Route path="search-questions" element={<SearchQuestions />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
