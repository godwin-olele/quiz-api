import React from "react"

export default function Footer() {
  return (
    <div
      className='w-full h-auto bg-orange what-we-do__header text-center px-[7rem] pt-[7rem] pb-[3rem] social-container'
      id='footer'
    >
      <p className='text-[2rem] text-[#ffffff] mb-[2rem] social'>Built for:</p>
      <div className='flex justify-between items-center  w-[400px] my-0 mx-auto developer'>
        <div className='text-[#ffffff] flex justify-center items-center'>
          <svg
            className='flex-shrink-0 block'
            width='40'
            height='40'
            viewBox='0 0 44 44'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 22C1.03435e-06 9.84973 9.84974 -1.03435e-06 22 0C30.9336 7.80998e-07 38.6235 5.3248 42.069 12.9737L12.9737 42.069C11.7252 41.5066 10.5385 40.8311 9.42689 40.0555L27.4824 22H22L6.44366 37.5563C2.46244 33.5751 -5.31105e-07 28.0751 0 22Z'></path>
            <path d='M44 22.0076L22.0076 44C34.1518 43.9959 43.9959 34.1518 44 22.0076Z'></path>
          </svg>
          <a
            href='https://planetscale.com/'
            target='_blank'
            className='underline underline-offset-4 ml-[0.5rem] text-[22px] planetscale'
          >
            PlanetScale
          </a>
        </div>
        <div className='text-[20px] text-[#ffffff]'>X</div>
        <div className='text-[#ffffff] flex justify-center items-center'>
          <img
            src='/images/brand-icon.png'
            alt='hashnode'
            className='w-[40px]'
          />
          <a
            href='https://hashnode.com/'
            target='_blank'
            className='underline underline-offset-4 ml-[0.5rem] text-[22px] hashnode '
          >
            Hashnode
          </a>
        </div>
      </div>
    </div>
  )
}
