import React from "react";

const cards = [
  {
    imagePath: "/images/file.png",
    header: "Generate Questions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    imagePath: "/images/idea.png",
    header: "Solution Providers",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
  {
    imagePath: "/images/download.png",
    header: "Save Questions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
  },
];

export default function () {
  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem]">What Do We Do?</h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
      </div>
      <div className="grid grid-cols-3 gap-[50px] w-full mt-[4rem]">
        {cards.map((item, i) => (
          <div
            className="w-full h-auto rounded-[10px] py-[40px] px-[30px] card"
            key={i + 1}
          >
            <img src={item.imagePath} alt={item.header} />
            <h1 className="text-[25px] font-medium mt-[2rem]">{item.header}</h1>
            <p className="mt-[1.5rem] text-[18px] text-[#373737]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
