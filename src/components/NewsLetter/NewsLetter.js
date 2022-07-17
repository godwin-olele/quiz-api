import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full h-[350px] bg-[#1e47f3] flex justify-center items-center relative what-we-do__header '>
      <div className='absolute left-[15rem]'>
        <h1 className='text-[30px] font-medium text-[#fff] mb-[2rem]'>Subscribe To Our News Letter</h1>
        <form className='flex justify-between items-center'>
        <input type="email" placeholder='Enter your email' className='py-[15px] px-[20px] outline-none w-[400px] rounded-l-[10px] text-[18px]' />
        <button className='py-[15px] px-[20px] rounded-r-[10px] bg-orange text-[18px] text-[#fff]'>Get Started</button>
        </form>
      </div>
      <div className='w-[320px] absolute bottom-0 right-[4rem]'>
        <img src="/images/news-letter.png" alt=""/>
      </div>
    </div>
  )
}
