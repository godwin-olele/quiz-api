import React from "react"
import DashboardNav from "./DashboardContents/Nav/UserDashboardNav"
import DashboardSkeleton from "../../Skeletons/DashboardSkeleton"

import { useStoreState } from "easy-peasy"

export default function UserDashboard() {
  const UIloading = useStoreState(({ User }) => User.loading)

  if (UIloading)
    return <DashboardSkeleton tabs={[1, 2, 3, 4]} boxes={[1, 2, 3]} />

  return <DashboardNav />
}
