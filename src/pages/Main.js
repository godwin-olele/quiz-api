import React from "react";
import Faq from "../components/Faq/Faq";
import Categories from "../components/Main/Categories";
import WhatWeDo from "../components/Main/WhatWeDo";

export default function Main() {
  return (
    <>
      <WhatWeDo />
      <Categories />
      <Faq />
    </>
  );
}
