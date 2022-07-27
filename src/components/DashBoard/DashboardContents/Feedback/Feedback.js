import React, { useState } from "react"
import { TextField } from "../../../Widgets/InputFields"

export default function Feedback() {
  const [form, setForm] = useState({
    question: "",
    issue: "",
    explanation: "",
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
  /*
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
*/
  const { question, issue, explanation } = form

  return (
    <>
      <div className='w-full h-auto py-[3rem] px-[1rem] flex justify-center'>
        <form className=' w-[600px] h-auto submit-question-form'>
          <h1 className='text-[#000000] text-[1.7rem] font-medium'>
            Correction Form
          </h1>

          <div className='mt-[2rem]'>
            <TextField
              label='Question ID'
              name='question'
              value={question}
              onChange={handleChange}
              error={errors.question}
              placeholder='Enter question ID'
            />

            <TextField
              label='Issue'
              name='issue'
              value={issue}
              onChange={handleChange}
              error={errors.issue}
              placeholder='What Issues do you have with this question?'
            />

            <TextField
              label='Explanation'
              name='explanation'
              value={explanation}
              onChange={handleChange}
              error={errors.explanation}
              placeholder='What Solutions do you Require?'
            />
          </div>
          <button
            className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition
               `}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
