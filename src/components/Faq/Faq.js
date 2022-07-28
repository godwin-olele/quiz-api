import React, { useState, useRef } from "react";
import FaqComponent from "react-faq-toggler";

export default function Faq() {
  const [faqArray, setFaqArray] = useState([
    {
      numId: "1.)",
      question: "Who is the API for?",
      answer:
        "The API is for developers or hobbyists who want to build a question and answer functionality into their websites or applications.",
      active: false,
    },
    {
      numId: "2.)",
      question: "Why should I use the API?",
      answer:
        "The API saves developers time building quizzes, flashcards, or trivia applications. Due to its ease of integration and use, the application can be launched faster.",
      active: false,
    },
    {
      numId: "3.)",
      question: "Where do the questions come from?",
      answer:
        "Questions come from a variety of sources: User contributions, scripts scraping public websites, past questions and answers from Public Exams, etc...",
      active: false,
    },
    {
      numId: "4.)",
      question: "Why should I trust the answers and explanations?",
      answer:
        "All questions are thoroughly reviewed before being made available to the public for use.",
      active: false,
    },
    {
      numId: "5.)",
      question: "What if by mistake or oversight I spot an error or issue with a question, where can I raise a complaint or suggest a correction?",
      answer:
        "You can click on the feedback or errata form to raise an issue concerning a question.",
      active: false,
    },
    {
      numId: "6.)",
      question: "I'm not a developer, how can I benefit from this?",
      answer:
        "You can benefit in so many ways: You can submit questions & have it stored permanently in our database for future reference or access. Your submitted questions also get reviewed. At the end of the day, you get to know whether your suggested answer is right or wrong for free :) Adding questions also gives you the chance to help others.",
      active: false,
    },
    {
      numId: "7.)",
      question: "Will I be able to do the above without registering?",
      answer:
        "No, you can't. You need to have an account so you can get all the recognition & rank you deserve when you contribute or review questions.",
      active: false,
    },
  ]);
  const content = useRef(null);
  const setActive = (id) => {
    const newFaqArray = faqArray.map((question, index) => {
      return index === id
        ? { ...question, active: !question.active }
        : { ...question, active: false };
    });

    setFaqArray(newFaqArray);
  };
  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header faq-main-container-mobile">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem] faq-header-text">
          Frequently Asked Questions
        </h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
      </div>
      <div className="w-full grid grid-rows-1 gap-[20px] mt-[4rem]">
        {faqArray.map(({ numId, question, answer, active }, id) => (
          <div className="" ref={content} key={numId}>
            <div
              className="bg-[#F7F7F7] py-[1rem] px-[4rem] flex justify-between items-center faq-container__mobile"
              onClick={() => setActive(id)}
            >
            <div className="flex justify-center items-center">
            <div>{numId}</div>
              <p className="ml-[2rem] text-[18px] font-medium text-[#373737] max-w-[44.5rem] faq-question">
                {question}
              </p>
            </div>
              <img
                src="/images/faq-arr.png"
                className="cursor-pointer"
                style={{
                  transform: `${active ? "rotate(180deg)" : "rotate(0deg)"}`,
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
            {active && (
              <div
                className="mt-[1rem] py-[1rem] px-[4rem] rounded-lg"
                style={{ backgroundColor: "rgba(160, 107, 59, 0.08)" }}
              >
                <p className="text-[18px] font-medium text-[#373737] faq-question">
                  {answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
