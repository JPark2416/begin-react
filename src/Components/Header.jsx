import React from "react";
import style from "./Header.scss";
import logo from "../images/coding.png";

const Header = () => {
  return (
    <nav style={style} className="Navigation">
      <img src={logo} alt="header" />
      <p>JPark</p>
      <a href="/">About |</a>
      <a href="/">Projects |</a>
      <a href="/">Contact</a>
    </nav>
  );
};

export default Header;
