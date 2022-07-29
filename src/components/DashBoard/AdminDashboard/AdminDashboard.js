import React from "react"
import AdminDashboardNav from "./DashboardContents/Nav/AdminDashboardNav"
import DashboardSkeleton from "../../Skeletons/DashboardSkeleton"

import { useStoreState } from "easy-peasy"

export default function AdminDashboard() {
  const UIloading = useStoreState(({ User }) => User.loading)

  if (UIloading)
    return <DashboardSkeleton tabs={[1, 2, 3, 4]} boxes={[1, 2, 3, 4]} />

  return <AdminDashboardNav />
}
