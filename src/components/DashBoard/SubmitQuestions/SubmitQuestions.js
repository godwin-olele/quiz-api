import React from "react";

export default function SubmitQuestions() {
  return (
    <>
      <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center items-center">
        <form className=" w-[600px] h-auto submit-question-form">
          <h1 className="text-[#000000] text-[1.7rem] font-medium">
            Submit Questions
          </h1>
          <div className="mt-[2rem]">
            <div>
              <label htmlFor="category" className="text-[#454545]">
                Category
              </label>
              <select id="category" name="category">
                <option value="" disabled selected hidden>
                  Choose category
                </option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="mt-[1.5rem]">
              <label htmlFor="type" className="text-[#454545]">
                Type
              </label>
              <select id="type" name="type">
                <option value="" disabled selected hidden>
                  Choose Type
                </option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="mt-[1.5rem]">
              <label htmlFor="type" className="text-[#454545]">
                Difficulty
              </label>
              <select id="difficulty" name="difficulty">
                <option value="" disabled selected hidden>
                  Choose Difficulty
                </option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="mt-[1.5rem]  mb-[1.2rem]">
              <label htmlFor=" questions" className="text-[#454545]">
                Questions
              </label>
              <textarea>Some text...</textarea>
            </div>
            <label htmlFor="answer" className="text-[#454545]">
              Correct Answer
            </label>
            <input
              type="text"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="answer"
              autoComplete="true"
            />
           
            <label htmlFor="answer" className="text-[#454545]">
              Incorrect Answer
            </label>
            <div className="flex justify-between">
            <input
              type="text"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="email"
              autoComplete="true"
            />
            <input
              type="email"
              className="w-full py-[13px] px-[20px] ml-[3rem] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="email"
              autoComplete="true"
            />
            </div>
            <label htmlFor="image" className="text-[#454545]">
              Image
            </label>
            <input
              type="text"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="answer"
              autoComplete="true"
            />
            <div className="mt-[1.5rem]  mb-[1.2rem]">
              <label htmlFor=" questions" className="text-[#454545]">
                Explanation
              </label>
              <textarea></textarea>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
