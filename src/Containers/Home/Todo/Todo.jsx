import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };

  return (
    <div>
      <input value={inputValue} type="text" />
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
