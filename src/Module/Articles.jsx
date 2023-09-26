import React from "react";
import Article from "./Article";
import "../Style/Articles.css";

// const myStyle = {
//   display: "flex",
//   flex-wrap: "wrap",
// };

const Articles = () => {
  return (
    <div className="articles">
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
