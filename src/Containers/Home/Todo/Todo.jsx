import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState(["first", "second", "third"]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    console.log(inputValue);
    setTodoList([...todoList, inputValue]);
    console.log(todoList);
  };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>inputValue : {inputValue}</p>
      <button onClick={addItem}>Add</button>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
};

export default Todo;
