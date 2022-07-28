import React, { useState } from "react";
import { validateSendFeedback } from "../../utils/validators";
import { TextField } from "../Widgets/InputFields";
import { createFeedback } from "../../core/api";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export default function ApiHelper() {
  const [form, setForm] = useState({
    question: "",
    issue: "",
    explanation: "",
  });

  // ui stuff
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // do validate
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // do submit
    const possibleErrors = validateSendFeedback(form);

    if (Object.keys(possibleErrors).length > 0) {
      setLoading(false);
      return setErrors(possibleErrors);
    }

    setErrors({});

    // continue

    createFeedback(form)
      .then(({ data: res }) => {
        const { status, message, data } = res;
        console.log(res);

        if (status == "success") {
          toast.success(message);
        }

        // setTimeout(next, 5000)
      })
      .catch(({ response: { data: res } }) => {
        const { status, message, error } = res;

        console.log(res);

        if (Array.isArray(error)) {
          setLoading(false);
          return toast.error(error[0]);
        }

        // const keys = Object.keys(error)
        // keys.forEach((e) => {
        //   setErrors({
        //     [e]: error[e][0],
        //   })
        // })
        setLoading(false);
      });
  };

  const { question, issue, explanation } = form;
  return (
    <>
      <ToastContainer />

      <div className="h-screen w-full flex what-we-do__header what-we-do__header-form">
        <div className="bg-[#f387047e] left-bg-login h-screen w-full px-[5rem]">
          <div className="w-full h-auto mt-[5rem] flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <a href="/" className="brand-name">
                QuizAPI
              </a>
              <ul className="flex justify-between items-center w-[130px] text-[18px] font-medium text-[#454545] underline underline-offset-4 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/about">Api</a>
                </li>
              </ul>
            </div>
            <div className=" w-full h-[500px] mt-[6rem] flex justify-center items-center">
              <img src="/images/flame-8.png" alt="" className="w-full"/>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] w-[1700px] h-screen flex justify-center items-center form-section">
          <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center form-section-2">
            <form className=" w-[600px] h-auto submit-question-form">
              <h1 className="text-[#000000] text-[1.7rem] font-medium">
                API Helper
              </h1>

              <div className="mt-[2rem]">
                <TextField
                  label="Number of Questions"
                  name="question"
                  value={question}
                  onChange={handleChange}
                  error={errors.question}
                  placeholder="10"
                />

                <TextField
                  label="Category"
                  name="explanation"
                  value={explanation}
                  onChange={handleChange}
                  error={errors.explanation}
                  placeholder="Select category"
                />
                <TextField
                  label="Difficulty"
                  name="issue"
                  value={issue}
                  onChange={handleChange}
                  error={errors.issue}
                  placeholder="Select difficulty"
                />

                <TextField
                  label="Type"
                  name="explanation"
                  value={explanation}
                  onChange={handleChange}
                  error={errors.explanation}
                  placeholder="Select type"
                />
              </div>
              <button
                className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition
               `}
              >
                Generate API URL
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
