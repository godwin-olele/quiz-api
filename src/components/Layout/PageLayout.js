import React from "react";
import "./PageLayout.css";

export default function Index(props) {
  return <div className="max-w-[1450px]">{props.children}</div>;
}
