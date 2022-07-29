import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full h-[350px] bg-[#1e47f3] flex justify-center items-center relative what-we-do__header newsletter-mobile'>
      <div className='absolute left-[15rem] newsletter-inputs-mobile'>
        <h1 className='text-[30px] font-medium text-[#fff] mb-[2rem] newsletter-header-mobile'>Subscribe To Our News Letter</h1>
        <form className='flex justify-between items-center newsletter-form-mobile'>
        <input type="email" placeholder='Enter your email' className='py-[15px] px-[20px] outline-none w-[400px] rounded-l-[10px] text-[18px] newsletter-form-input-mobile' />
        <button className='py-[15px] px-[20px] rounded-r-[10px] bg-orange border-[1px] border-orange text-[18px] text-[#fff] newsletter-form-btn-mobile'>Get Started</button>
        </form>
      </div>
      <div className='w-[320px] absolute bottom-0 right-[4rem] newsletter-img-mobile'>
        <img src="/images/news-letter.png" alt=""/>
      </div>
    </div>
  )
}
