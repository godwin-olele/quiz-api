import React from "react";

export default function Feedback() {
  return (
    <>
      <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center">
        <form className=" w-[600px] h-auto submit-question-form">
          <h1 className="text-[#000000] text-[1.7rem] font-medium">
            Correction Form
          </h1>
          <div className="mt-[2rem]">
            <label htmlFor="answer" className="text-[#454545]">
              Question ID
            </label>
            <input
              type="text"
              placeholder="Enter question ID"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="answer"
              autoComplete="true"
            />
            <label htmlFor="answer" className="text-[#454545]">
              Issue
            </label>
            <input
              type="text"
              placeholder="What Issues do you have with this question?"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[1.2rem] mt-[0.5rem]"
              name="answer"
              autoComplete="true"
            />
            <label htmlFor="answer" className="text-[#454545]">
              Explanation
            </label>
            <input
              type="text"
              placeholder="What Solutions do you Require?"
              className="w-full py-[13px] px-[20px] rounded-[6px] mb-[3rem] mt-[0.5rem]"
              name="answer"
              autoComplete="true"
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
  );
}
