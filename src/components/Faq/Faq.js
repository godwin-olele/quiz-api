import React, { useState, useRef } from "react";
import FaqComponent from "react-faq-toggler";

export default function Faq() {
  const [faqArray, setFaqArray] = useState([
    {
      numId: "1.)",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.",
      answer:
        "Hello",
      active: false,
    },
    {
      numId: "2.)",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.",
      answer:
        "hi",
      active: false,
    },
    {
      numId: "3.)",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.",
      active: false,
    },
    {
      numId: "4.)",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna. ",
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
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem]">
          Frequently Asked Questions
        </h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
      </div>
      <div className="w-full grid grid-rows-1 gap-[20px] mt-[4rem]">
        {faqArray.map(({ numId, question, answer, active }, id) => (
          <div className="" ref={content} key={numId}>
            <div
              className="bg-[#F7F7F7] py-[1rem] px-[4rem] flex justify-between items-center"
              onClick={() => setActive(id)}
            >
            <div className="flex justify-center items-center">
            <div>{numId}</div>
              <p className="ml-[2rem] text-[18px] font-medium text-[#373737] max-w-[44.5rem]">
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
                <p className="text-[18px] font-medium text-[#373737]">
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
