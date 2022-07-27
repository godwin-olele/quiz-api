import React from "react"
import DashboardNav from "./DashboardContents/Nav/UserDashboardNav"
import DashboardSkeleton from "../../Skeletons/DashboardSkeleton"

import { useStoreState } from "easy-peasy"

export default function UserDashboard() {
  let UIloading = useStoreState(({ User }) => User.loading)

  return <>{UIloading ? <DashboardSkeleton /> : <DashboardNav />}</>
}
