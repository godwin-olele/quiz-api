import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

import { DOCS } from "../../constants"

export default function Features() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div
      className='px-[7rem] py-[7rem] w-full h-auto what-we-do__header'
      id='features'
    >
      <div className='flex justify-center items-center my-0 mx-auto '>
        <div className='w-[250px] h-[5px] bg-orange rounded-full header-line'></div>
        <h1 className='text-[35px] ml-[1.5rem] mr-[1.5rem] features-header-text'>
          Features
        </h1>
        <div className='w-[250px] h-[5px] bg-orange rounded-full header-line'></div>
      </div>
      <div className='grid grid-cols-1 gap-[30px] w-full mt-[4rem]'>
        <div className='flex justify-between items-center h-auto w-full feature-grid'>
          <div
            className='h-auto w-full large-set-of-question'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <h1 className='text-[30px] feature-grid-header-text-1'>
              A large set of questions
            </h1>
            <p className='text-[18px] mt-[0.5rem] text-[#373737] feature-grid-sub-header-text-1'>
              Our database of questions is constantly growing. It contains a
              variety of well-written questions divided into different
              categories. Additionally, questions are being added and reviewed
              on daily basis.
            </p>
          </div>
          <img
            src='/images/concept-of-importance-of-work-place-for-employees-in-business.png'
            alt=''
            className='h-[350px] w-[500px] ml-[3rem] feature-grid--img-1'
            data-aos='zoom-in-left'
            data-aos-duration='1000'
          />
        </div>
        <div className='flex justify-between items-center h-auto w-full feature-grid-2'>
          <img
            src='/images/concept-of-business-lady-doing-research-and-development-of-product.png'
            alt=''
            className='h-[350px] w-[500px] mr-[3rem] feature-grid--img-1'
            data-aos='zoom-in-right'
            data-aos-duration='1000'
          />
          <div
            className='h-auto w-full'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <h1 className='text-[30px] feature-grid-header-text-1'>
              User contributions
            </h1>
            <p className='text-[18px] mt-[0.5rem] text-[#373737] feature-grid-sub-header-text-1'>
              There are many more questions in the universe that are yet to be
              added to our database. We haven't even scratched the surface!. We
              want you to assist us in gathering the rest of these questions!. To
              add your question and answer to our collection,{" "}
              <Link
                to='/Signup'
                className='border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto'
              >
                Sign-up
              </Link>{" "}
              and submit it here.
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center h-auto w-full feature-grid'>
          <div
            className='h-auto w-full large-set-of-question'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <h1 className='text-[30px] feature-grid-header-text-1'>
              Free and Easy to use
            </h1>
            <p className='text-[18px] mt-[0.5rem] text-[#373737] feature-grid-sub-header-text-1'>
              Our easy to use & simple RESTful API can easily be integrated into
              both websites & applications. The{" "}
              <Link
                to='/api-helper'
                className='border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto'
              >
                API helper form
              </Link>{" "}
              alongside our well-written API{" "}
              <a
                href={DOCS}
                target='_blank'
                rel='no-referrer'
                className='border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto'
              >
                documentation
              </a>{" "}
              makes the integration process easier.
            </p>
          </div>
          <img
            src='/images/business-lady-do-multi-tasking.png'
            alt=''
            className='h-[350px] w-[500px] ml-[3rem] feature-grid--img-1'
            data-aos='zoom-in-left'
            data-aos-duration='1000'
          />
        </div>
      </div>
    </div>
  )
}
