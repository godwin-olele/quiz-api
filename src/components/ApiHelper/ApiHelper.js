import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Alert from "@mui/material/Alert"
import IconButton from "@mui/material/IconButton"
import { MdOutlineContentCopy } from "react-icons/md"
import { ToastContainer, toast } from "react-toastify"
import "./ApiHelper.css"

import { validateApiHelper } from "../../utils/validators"
import {
  TextField,
  CustomLoaderDropdownInput,
  DropdownInput,
} from "../Widgets/InputFields"
import { LoadingButton } from "../Widgets/Button/MyButtons"

import { getAllCategories } from "../../core/api"
import { API_URL } from "../../constants"

export default function ApiHelper() {
  const [form, setForm] = useState({
    limit: "",
    category: "",
    difficulty: "",
    type: "",
  })

  const typeList = ["multiple-choice", "True / False"]
  const difficultyList = ["easy", "medium", "hard"]

  // ui stuff
  const [loading, setLoading] = useState(false)
  const [isCatLoading, setCatLoading] = useState(true)

  const [errors, setErrors] = useState({})
  const [url, setUrl] = useState(null)
  const [categories, setCategories] = useState([])

  const fetchCategories = () => {
    setCatLoading(true)
    // fetchCategories
    getAllCategories()
      .then(({ data: res }) => {
        const { status, message, data } = res

        if (data) {
          setCategories(data.results)
          setCatLoading(false)
        }
        // setCatLoading(false)
        // setCategories(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const validate = (form) => {
    const possibleErrors = validateApiHelper(form)

    if (Object.keys(possibleErrors).length > 0) {
      setErrors(possibleErrors)
      return false
    }

    setErrors({})
    return true
  }

  const generateUrl = async (limit, category, difficulty, type) => {
    // `/questions?limit=${limit}&category=${limit}&difficulty=${difficulty}&type=${type}&search=${search}`
    setLoading(true)
    const uri = `${API_URL}questions?limit=${limit}&category=${category}&difficulty=${difficulty}&type=${type}`
    await setTimeout(() => setLoading(false), 500)

    setUrl(uri)
    return uri
  }

  const handleChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }

    setForm(newForm)

    // do validate
    validate(newForm)
    if (url) setUrl(null)
  }

  const handleCategoryChange = (e) => {
    const cat = categories.find((cat) => (cat.name = e.target.value))

    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newForm)

    // do validate
    validate(newForm)
    if (url) setUrl(null)
  }

  const { limit, category, difficulty, type } = form

  const handleSubmit = (e) => {
    e.preventDefault()

    // do submit
    if (validate(form)) generateUrl(limit, category, difficulty, type)
  }

  return (
    <>
      <ToastContainer />
      <div className='h-screen w-full flex what-we-do__header what-we-do__header-form'>
        <div className='bg-[#f387047e] h-screen w-full px-[5rem] left-bg-api'>
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
                  <a className='invisible' href='/about'>
                    Api
                  </a>
                </li>
              </ul>
            </div>
            <div className=' w-full h-[400px] mt-[6rem] flex justify-center items-center'>
              <img src='/images/flame-8.png' alt='' className='w-full' />
            </div>
          </div>
        </div>
        <div className='bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section'>
          <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center form-section-2'>
            {/* main content */}
            <form
              onSubmit={handleSubmit}
              className=' w-[600px] h-auto submit-question-form'
            >
              <h1 className='text-[#000000] text-[1.7rem] font-medium'>
                API Helper
              </h1>

              <div className='mt-[2rem]'>
                <TextField
                  label='Number of Questions'
                  name='limit'
                  value={limit}
                  onChange={handleChange}
                  error={errors.limit}
                  placeholder='10'
                />

                <CustomLoaderDropdownInput
                  label='Category'
                  name='category'
                  value={category}
                  onChange={handleCategoryChange}
                  error={errors.category}
                  placeholder='Select category'
                  isLoading={isCatLoading}
                  options={categories}
                  defaultOption='Select category'
                />

                <DropdownInput
                  label='Difficulty'
                  name='difficulty'
                  value={difficulty}
                  onChange={handleChange}
                  error={errors.difficulty}
                  options={difficultyList}
                  defaultOption='Select Difficulty'
                />

                <DropdownInput
                  label='Type'
                  name='type'
                  value={type}
                  onChange={handleChange}
                  error={errors.type}
                  options={typeList}
                  defaultOption='Select Type'
                />
              </div>

              <div className='w-full my-[1rem] flex justify-center items-center transition'>
                {url && (
                  <Alert
                    severity='success'
                    className=' api-helper-box'
                    action={
                      <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => {
                          // do copy
                          navigator.clipboard.writeText(url)
                          toast.success("Copied!")
                        }}
                      >
                        <MdOutlineContentCopy />
                      </IconButton>
                    }
                  >
                    <h3 className='text-xs text-clip'>{url}</h3>
                  </Alert>
                )}
              </div>

              <LoadingButton
                isLoading={loading || isCatLoading}
                text='Submit'
              />

              {/* <button
                className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition`}>
                Generate API URL
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
