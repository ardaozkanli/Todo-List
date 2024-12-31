import React from "react";

function ToDoCreate() {
  return (
    <div className="todo-create">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter todo"></input>
      <button className="create-todo-btn">Create Todo</button>
    </div>
  );
}

export default ToDoCreate;
