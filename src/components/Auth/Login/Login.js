import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { ImGoogle } from "react-icons/im"
import { toast, ToastContainer } from "react-toastify"
import CircularProgress from "@mui/material/CircularProgress"
import { useNavigate } from "react-router-dom"

import { loginUser } from "../../../core/api"
import "./Login.css"

import { TextField, ObscurableTextField } from "../../Widgets/InputFields"
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

  const navigate = useNavigate()
  const next = () => {
    // navigate("/dashboard")
    window.location.href = "/dashboard"
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

    // do fetch
    // bolu
    // 12345678
    const isEmail = (email) => email.includes("@")
    const { credential, password } = form

    const currentCredential = isEmail(credential) ? "email" : "username"
    const credentials = {
      [currentCredential]: credential,
      password,
    }

    loginUser(credentials)
      .then(({ data: res }) => {
        const { status, message, data } = res
        // if (status == "success") {
        // }

        toast.success("logged in successfully")
        setTimeout(next, 2000)
      })
      .catch((e) => {
        // console.log(e)
        if (!e?.response.data) {
          setLoading(false)
          return toast.error("Unable to connect to our servers!")
        }

        const {
          response: { data: res },
        } = e
        const { status, message, error } = res

        console.log(res)

        if (Array.isArray(error)) {
          setLoading(false)
          return toast.error(error[0])
        }

        const keys = Object.keys(error)
        keys.forEach((e) => {
          setErrors({
            credential: error[e][0],
          })
        })
      })
  }

  const { credential, password } = form

  return (
    <>
      <ToastContainer />
      <div className='h-screen w-full flex what-we-do__header what-we-do__header-form'>
        <div className='left-bg-login h-screen w-full px-[5rem]'>
          <div className='w-full h-auto mt-[5rem] flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
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
            <div className=' w-full h-[400px] mt-[6rem] flex justify-center items-center'>
              <img src='/images/flame-8.png' alt='' className='w-full' />
            </div>
          </div>
        </div>
        <div className='bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section'>
          <div className='mt-[-2rem] w-[450px] form-section-2'>
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
            <form
              className='mt-[3rem] md:w-full w-full'
              onSubmit={!loading ? handleSubmit : (e) => e.preventDefault()}
            >
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
                {!loading ? (
                  "Sign In"
                ) : (
                  <CircularProgress color='inherit' size={25} />
                )}
              </button>
              <button
                className={`google-sign-in mt-[1.5rem] flex justify-center items-center py-[13px] w-full outline-none rounded-[6px] border-2 text-[18px] border-orange text-center text-orange font-semibold transition
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
    </>
  )
}
