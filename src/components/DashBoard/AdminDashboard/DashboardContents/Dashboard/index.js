import React, { useEffect, useState } from "react"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"
import { styled } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import { useStoreActions, useStoreState } from "easy-peasy"

export default function AdminDashboard({ user }) {
  let isLoading = useStoreState(({ Statistics }) => Statistics.loading)
  let statistics = useStoreState(({ Statistics }) => Statistics.statistics)

  const fetchStatistics = useStoreActions(
    ({ Statistics }) => Statistics.fetchStatistics
  )
  const navigate = useNavigate()

  const fetchData = async () => {
    await fetchStatistics(user.id)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#F38704" : "#308fe8",
    },
  }))

  const { question, users } = statistics
  const { all_questions, verified_questions, unverified_questions } = question

  const total_users = users["Total Users"]
  const total_staff = users["Total Staff"]

  console.log(statistics)

  return (
    <>
      <div className='w-full h-[600px] py-[3rem] px-[1rem] admin-dashboard__Content'>
        <div className='left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {all_questions}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Submitted Questions</p>
            </div>
          )}
        </div>
        <div className='left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {verified_questions}
              </h1>
              <p className='text-[20px] text-[#4c4c4c] mb-[1rem]'>
                Verified Questions
              </p>
              <BorderLinearProgress variant='determinate' value={70} />
            </div>
          )}
        </div>
        <div className='left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {unverified_questions}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Unverified Questions</p>
            </div>
          )}
        </div>

        <div className='left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {total_users}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Users</p>
            </div>
          )}
        </div>
        <div className='left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {total_staff}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Staffs</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
