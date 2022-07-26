import React, { useEffect, useState } from "react"
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress"

import CircularProgress from "@mui/material/CircularProgress"

import { styled } from "@mui/material/styles"
import { useStoreActions, useStoreState } from "easy-peasy"

export default function Dashboard({ user }) {
  let isFetchingData = useStoreState(({ Statistics }) => Statistics.loading)

  let [isLoading, setLoading] = useState(isFetchingData)
  let statistics = useStoreState(({ Statistics }) => Statistics.userStatistics)

  const fetchUserStatistics = useStoreActions(
    ({ Statistics }) => Statistics.fetchUserStatistics
  )

  const fetchData = async () => {
    fetchUserStatistics(user.id)
      .then(() => {
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    // if (user.id) {
    fetchData()
    // }
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
      backgroundColor: theme.palette.mode === "light" ? "#31d161" : "#308fe8",
    },
  }))

  const { all_question, verified_questions, unverified_questions } = statistics

  return (
    <>
      {/* // show a skeleton here */}

      <div className='w-full h-screen grid grid-cols-3 gap-x-[50px] py-[3rem] px-[1rem]'>
        <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-orange w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {all_question}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Submitted Questions</p>
            </div>
          )}
        </div>
        <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#31d161] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {verified_questions}
              </h1>
              <p className='text-[20px] text-[#4c4c4c] mb-[1rem]'>
                Verified Questions
              </p>
              <BorderLinearProgress
                variant='determinate'
                value={verified_questions}
              />
            </div>
          )}
        </div>
        <div className='left-nav h-[220px] rounded-[10px] bg-[#fff] p-[30px] flex items-center relative'>
          {isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <div className='bg-[#dd2c2c] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]'></div>
              <h1 className='text-[30px] text-[#4c4c4c] font-[900]'>
                {unverified_questions}
              </h1>
              <p className='text-[20px] text-[#4c4c4c]'>Unverified Questions</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
