import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { HiEye } from "react-icons/hi"
import { HiEyeOff } from "react-icons/hi"
import { ImGoogle } from "react-icons/im"
// geting ready

import { TextField, ObscurableTextField } from "../../Widgets/TextInputField"
import { validateSigninData } from "../../../utils/validators"

export default function Login() {
  const [form, setForm] = useState({
    credential: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // do signup
    const possibleErrors = validateSigninData(form)

    if (Object.keys(possibleErrors).length > 0) {
      setLoading(false)
      return setErrors(possibleErrors)
    }

    setErrors({})

    //
  }

  const { credential, password } = form

  return (
    <div className='h-screen w-full flex what-we-do__header'>
      <div className='left-bg-login h-screen w-full px-[5rem]'>
        <div className='w-full h-auto mt-[5rem] flex justify-between items-center'>
          <a href='/' className='brand-name'>
            QuizAPI
          </a>
          <ul className='flex justify-between items-center w-[130px] text-[18px] font-medium text-[#454545] underline underline-offset-4 '>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a href='/about'>Api</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-[#fff] w-[1700px] h-screen flex justify-center items-center'>
        <div className='mt-[-2rem] w-[450px]'>
          <h1 className='text-[#000000] text-[1.7rem] font-medium'>
            Welcome Back
          </h1>
          <p className='font-medium text-[#454545] mt-[1rem]'>
            Don’t have an account?
            <Link
              to='/Signup'
              className='border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto ml-1'
            >
              Sign-up
            </Link>
          </p>
          {/* form */}
          <form className='mt-[3rem] md:w-full w-full' onSubmit={handleSubmit}>
            <TextField
              type='text'
              label='Username / Email'
              name='credential'
              value={credential}
              placeholder='Elonmusk'
              onChange={handleChange}
              error={errors.credential}
            />
            <ObscurableTextField
              label='Password'
              name='password'
              value={password}
              onChange={handleChange}
              error={errors.password}
            />
            <p className='text-right text-[#454545] mb-[2rem]'>
              Forgot Password?
            </p>

            <button
              type='submit'
              className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#fdfbe3] font-semibold mt-auto transition ${
                loading && "opacity-25"
              }
               `}
            >
              {!loading ? "Sign In" : "loading..."}
            </button>
            <button
              className={`mt-[1.5rem] flex justify-center items-center py-[13px] w-full outline-none rounded-[6px] border-2 text-[18px] border-orange text-center text-orange font-semibold transition
               `}
            >
              <IconContext.Provider value={{ className: "google" }}>
                <ImGoogle />
              </IconContext.Provider>
              Sign In with google
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
