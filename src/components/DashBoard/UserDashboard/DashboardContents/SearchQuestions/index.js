import React from "react";

export default function SearchQuestions() {
  return (
    <>
      <div className="w-full h-auto py-[3rem] px-[1rem] flex justify-center dashboard-search-question-container">
        <form className=" w-[600px] h-auto submit-question-form">
          <h1 className="text-[#000000] text-[1.7rem] font-medium">
            Search Question
          </h1>
          <div className="mt-[2rem]">
            <div className="mt-[1.5rem]">
              <label htmlFor="type" className="text-[#454545]">
                Category
              </label>
              <select id="type" name="type">
                <option value="" disabled selected hidden>
                  Enter Category
                </option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="mt-[1.5rem] mb-[3rem]">
              <label htmlFor="type" className="text-[#454545]">
                Type
              </label>
              <select id="difficulty" name="difficulty">
                <option value="" disabled selected hidden>
                  What type of questions are you looking for?
                </option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <button
            className={`py-[13px] w-full outline-none border-none rounded-[6px] bg-orange text-[18px] text-center text-[#ffffff] font-semibold mt-auto transition
               `}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
