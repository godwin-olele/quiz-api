import React from "react";
import "react-nice-scroll/dist/styles.css";
import { ScrollContainer, HorizontalSection } from "react-nice-scroll";

const cards = [
  {
    imagePath: "/images/file.png",
    header: "Question Provider",
    text: "We are narrowly focused on making practice questions and answers available to developers building quiz-related applications through our API.",
  },
  {
    imagePath: "/images/idea.png",
    header: "Solution Provider",
    text: "We review and verify questions submitted by users before making the questions available for Public use.",
  },
  {
    imagePath: "/images/download.png",
    header: "Question Bank",
    text: "We have a large database of numerous questions that can be used to access the knowledge of students and learners alike on a particular subject matter. We also accept user submissions to help us grow our question database.    ",
  },
];

export default function () {
  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem] what-we-do-header-text">
          What Do We Do?
        </h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full header-line"></div>
      </div>
      <div className="grid grid-cols-3 gap-[50px] w-full mt-[4rem] what-we-do__content">
        {cards.map((item, i) => (
          <div
            className="w-full h-auto rounded-[10px] py-[40px] px-[30px] card"
            key={i + 1}
          >
            <img src={item.imagePath} alt={item.header} width={30} />
            <h1 className="text-[25px] font-medium mt-[2rem]">{item.header}</h1>
            <p className="mt-[1rem] text-[17px] text-[#373737]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
