import React from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export default function AdminDashboard() {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#F38704' : '#308fe8',
        },
      }));
  return (
    <>
      <div className="w-full h-[600px] py-[3rem] px-[1rem] admin-dashboard__Content">
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">975</h1>
            <p className="text-[20px] text-[#4c4c4c]">Submitted Questions</p>
          </div>
        </div>
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">350</h1>
            <p className="text-[20px] text-[#4c4c4c] mb-[1rem]">Verified Questions</p>
            <BorderLinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">625</h1>
            <p className="text-[20px] text-[#4c4c4c]">Unverified Questions</p>
          </div>
        </div>
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
   
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">24</h1>
            <p className="text-[20px] text-[#4c4c4c]">Submitted Questions</p>
          </div>
        </div>
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">1024</h1>
            <p className="text-[20px] text-[#4c4c4c]">Users</p>
          </div>
        </div>
        <div className="left-nav rounded-[10px] bg-[#fff] p-[30px] flex items-center relative">
          <div>
          <div className="bg-[#fafafa] w-[10px] h-[10px] rounded-full absolute top-[1rem] right-[1rem]"></div>
            <h1 className="text-[30px] text-[#4c4c4c] font-[900]">85</h1>
            <p className="text-[20px] text-[#4c4c4c]">Staffs</p>
          </div>
        </div>
      </div>
    </>
  );
}
