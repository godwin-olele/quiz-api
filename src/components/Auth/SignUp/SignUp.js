import React, { useState } from "react"
import { Link } from "react-router-dom"
import { validateSignupData } from "../../../utils/validators"
import { TextField, ObscurableTextField } from "../../Widgets/InputFields"
import { signupUser } from "../../../core/api"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
// import CircularProgress from "@mui/material/CircularProgress"

import { LoadingButton } from "../../Widgets/Button/MyButtons"

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })
  // ui stuff
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    // do validate
  }

  const navigate = useNavigate()
  const next = () => {
    navigate("/auth/email-verification")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // do signup
    const possibleErrors = validateSignupData(form)

    if (Object.keys(possibleErrors).length > 0) {
      setLoading(false)
      return setErrors(possibleErrors)
    }

    setErrors({})

    // continue

    signupUser(form)
      .then(({ data: res }) => {
        const { status, message, data } = res
        // if (status == "success") {
        // }
        console.log(res)

        setTimeout(next, 5000)
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

        // const keys = Object.keys(error)
        // keys.forEach((e) => {
        //   setErrors({
        //     [e]: error[e][0],
        //   })
        // })
        const keys = Object.keys(error)
        const err = {}
        keys.forEach((e) => {
          err[e] = error[e][0] ?? error[e]
          setErrors({
            ...errors,
            ...err,
          })

          // console.log({
          //   [e]: error[e][0] ?? error[e],
          // })
        })
        setLoading(false)
      })
  }

  const { username, email, password, password2 } = form

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
                  <Link to='/api'>Api</Link>
                </li>
              </ul>
            </div>
            <div className=' w-full h-[400px] mt-[6rem] flex justify-center items-center'>
              <img src='/images/flame-1235.png' alt='' className='w-full' />
            </div>
          </div>
        </div>
        <div className='bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section'>
          <div className='mt-[-2rem] w-[450px] form-section-2'>
            <h1 className='text-[#000000] text-[1.7rem] font-medium'>
              Create New Account
            </h1>
            <p className='font-medium text-[#454545] mt-[1rem]'>
              Already a member?
              <Link
                to='/Login'
                className='border-none outline-none hover:underline-offset-4 hover:transition-all w-full rounded-[6px] text-[#1e47f3] underline mt-auto ml-1'
              >
                Login
              </Link>
            </p>
            {/* form */}
            <form
              className='mt-[3rem] md:w-full w-full'
              onSubmit={handleSubmit}
            >
              <TextField
                type='text'
                label='Username'
                name='username'
                value={username}
                placeholder='Elonmusk'
                onChange={handleChange}
                error={errors.username}
              />
              <TextField
                type='email'
                label='Email'
                name='email'
                placeholder='elon@gmail.com'
                value={email}
                onChange={handleChange}
                error={errors.email}
              />

              <ObscurableTextField
                label='Password'
                name='password'
                value={password}
                onChange={handleChange}
                error={errors.password}
              />

              <ObscurableTextField
                label='Retype Password'
                name='password2'
                value={password2}
                onChange={handleChange}
                error={errors.password2}
              />

              <LoadingButton isLoading={loading} text='Create Account' />

              {/* <button
                className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#fdfbe3] font-semibold mt-auto transition ${
                  loading && "opacity-25"
                }`}
              >
                {!loading ? (
                  "Create Account"
                ) : (
                  <CircularProgress color="inherit" size={25} />
                )}
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
