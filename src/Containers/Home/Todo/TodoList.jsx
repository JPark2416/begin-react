import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
};

export default TodoList;
