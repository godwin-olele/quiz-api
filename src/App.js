import React, { useState, useEffect } from "react"
import Footer from "./components/Footer/Footer"
import LandingPage from "./pages/LandingPage"
import Main from "./pages/Main"
import { motion } from "framer-motion"
import { useStoreActions } from "easy-peasy"
import { getStatistics } from "./core/api"
import PageLayout from "./components/Layout/PageLayout";

export default function App() {
  const fetchStatistics = useStoreActions(
    (action) => action.Statistics.fetchStatistics
  )


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => await fetchStatistics()

  return (
    <>
      <LandingPage />
      <Main />
      <Footer />
    </>
  )
}
