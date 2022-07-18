import React from "react";
import Faq from "../components/Faq/Faq";
import Categories from "../components/Main/Categories";
import Features from "../components/Main/Features";
import WhatWeDo from "../components/Main/WhatWeDo";
import NewsLetter from "../components/NewsLetter/NewsLetter";

export default function Main() {
  return (
    <>
      <WhatWeDo />
      <Categories />
      <Features />
      <Faq />
      <NewsLetter />
    </>
  );
}
