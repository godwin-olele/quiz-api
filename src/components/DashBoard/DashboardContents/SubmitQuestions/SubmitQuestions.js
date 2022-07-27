import React, { useState, useEffect } from "react"
import { getAllCategories } from "../../../../core/api"
import { validateSubmitQuestion } from "../../../../utils/validators"
import CircularProgress from "@mui/material/CircularProgress"
import {
  TextField,
  CustomLoaderDropdownInput,
  DropdownInput,
  TextAreaField,
} from "../../../Widgets/InputFields"

import { createNewQuestion } from "../../../../core/api"
import { toast, ToastContainer } from "react-toastify"
import Skeleton from "@mui/material/Skeleton"

export default function SubmitQuestions() {
  const [form, setForm] = useState({
    question: "",
    difficulty: "",
    type: "",
    category: 1,
    correct_answer: "",
    incorrect_answer_fields: {
      // incorrect_answer_1: "", // not needed - just for u to know what u are especting
      // incorrect_answer_2: "",
      // incorrect_answer_3: "",
    },
    explanation: "Some text...",
    image: "",
  })

  // ui stuff
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [isCatLoading, setCatLoading] = useState(true)
  const [categories, setCategories] = useState([])

  const typeList = ["multiple-choice", "True / False"]
  const difficultyList = ["easy", "medium", "hard"]

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    // do validate
  }

  const handleCategoryChange = (e) => {
    const cat = categories.find((cat) => (cat.name = e.target.value))
    setForm({
      ...form,
      [e.target.name]: cat.id,
    })

    // do validate
  }

  const handleAnswerFieldsChange = (e) => {
    setForm({
      ...form,
      incorrect_answer_fields: {
        ...form.incorrect_answer_fields,
        [e.target.name]: e.target.value,
      },
    })

    // do validate
  }

  // const navigate = useNavigate()
  const next = () => {
    // navigate("/auth/email-verification")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // do submit
    const possibleErrors = validateSubmitQuestion(form)

    if (Object.keys(possibleErrors).length > 0) {
      setLoading(false)
      return setErrors(possibleErrors)
    }

    setErrors({})

    // continue

    createNewQuestion(form)
      .then(({ data: res }) => {
        const { status, message, data } = res
        console.log(res)

        if (status == "success") {
          toast.success(message)
        }

        // setTimeout(next, 5000)
      })
      .catch(({ response: { data: res } }) => {
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
        setLoading(false)
      })
  }

  const {
    question,
    difficulty,
    type,
    category,
    correct_answer,
    incorrect_answer_fields,
    explanation,
    image,
  } = form

  return (
    <>
      <ToastContainer />
      <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center items-center'>
        <form
          className=' w-[600px] h-auto submit-question-form'
          onSubmit={handleSubmit}
        >
          <h1 className='text-[#000000] text-[1.7rem] font-medium'>
            Submit Questions
          </h1>
          <div className='mt-[2rem]'>
            <CustomLoaderDropdownInput
              label='Category'
              name='category'
              value={category}
              onChange={handleCategoryChange}
              error={errors.category}
              isLoading={isCatLoading}
              options={categories}
              defaultOption='Choose category'
            />
            {/* <DropdownInput
              label='Category'
              name='category'
              value={category}
              onChange={handleChange}
              error={errors.category}
            /> */}
            <DropdownInput
              label='Type'
              name='type'
              value={type}
              onChange={handleChange}
              error={errors.type}
              options={typeList}
              defaultOption='Choose Type'
            />
            <DropdownInput
              label='Difficulty'
              name='difficulty'
              value={difficulty}
              onChange={handleChange}
              error={errors.difficulty}
              options={difficultyList}
              defaultOption='Choose Difficulty'
            />

            <TextAreaField
              label='Question'
              name='question'
              value={question}
              onChange={handleChange}
              error={errors.question}
            />

            <TextField
              label='Correct Answer'
              name='correct_answer'
              value={correct_answer}
              onChange={handleChange}
              error={errors.correct_answer}
            />

            {type !== "True / False" && (
              <>
                <label htmlFor='incorrect_answers' className='text-[#454545]'>
                  Incorrect Answer
                </label>
                <div className='flex flex-wrap gap-2'>
                  <TextField
                    label=''
                    name='incorrect_answer_1'
                    value={incorrect_answer_fields.incorrect_answer_1 ?? ""}
                    onChange={handleAnswerFieldsChange}
                    error={errors.incorrect_answer_1}
                  />
                  <TextField
                    label=''
                    name='incorrect_answer_2'
                    value={incorrect_answer_fields.incorrect_answer_2 ?? ""}
                    onChange={handleAnswerFieldsChange}
                    error={errors.incorrect_answer_2}
                  />
                  {/* <TextField
                    label='Correct Answer'
                    name='correct_answer'
                    value={incorrect_answer_fields.incorrect_answer_3}
                    onChange={handleAnswerFieldsChange}
                    error={errors.correct_answer}
                  /> */}
                </div>
              </>
            )}

            <TextField
              label='Image'
              name='image'
              value={image}
              onChange={handleChange}
              error={errors.image}
            />

            <TextAreaField
              label='Explanation'
              name='explanation'
              value={explanation}
              onChange={handleChange}
              error={errors.explanation}
            />
          </div>

          <button
            className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition`}
          >
            {loading || isCatLoading ? (
              <CircularProgress color='inherit' />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  )
}
