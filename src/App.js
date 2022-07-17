import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
//import CustomCursor from "./components/CustomeCursor/CustomCursor";

export default function App() {
  
  return (
    <>
      <LandingPage />
      <Main />
      <Footer />
    </>
  );
}
