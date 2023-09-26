import React from "react";
import Article from "./Article";

const myStyle = {
  display: "flex",
  flex_wrap: "wrap",
};

const Articles = () => {
  return (
    <div style={myStyle}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />

      <Article />
    </div>
  );
};

export default Articles;
