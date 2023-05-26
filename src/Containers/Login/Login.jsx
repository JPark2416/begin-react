import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <p>login page</p>
      <form>
        <label>
          Email <input type="text" className="login_input" />
        </label>
        <br />
        <br />
        <label>
          Password <input type="password" className="login_input" />
        </label>
        <button className="login_button">Login</button>
      </form>
    </div>
  );
};

export default Login;
