import React from "react";
import Login from "./Containers/Login/Login";
import Profile from "./Containers/Home/mock";
import Todo from "./Containers/Home/Todo/Todo";

function App() {
  return (
    <div>
      <Login></Login>
      <Profile></Profile>
      <Todo></Todo>
    </div>
  );
}

export default App;
