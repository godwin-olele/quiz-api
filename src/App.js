import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import { motion } from "framer-motion";
import PageLayout from "./components/Layout/PageLayout";

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  return (
    <div className="flex justify-center">
      <PageLayout>
        <LandingPage />
        <Main />
        <Footer />
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </PageLayout>
    </div>
  );
}
