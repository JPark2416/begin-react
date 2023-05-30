import React from "react";
import "./style/About.scss";

const About = () => {
  return (
    <div className="About flex-container">
      <img src="images/JP.jpg" alt="profile" className="profileImage" />
      <h1>About Me Board</h1>
      <p>#developer</p>
      <p>#backend</p>
    </div>
  );
};

export default About;
