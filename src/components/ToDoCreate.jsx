import React, { useState } from "react";

function ToDoCreate({ onCreateToDo }) {
  const [newTodo, setNewTodo] = useState("");

  function clearInput() {
    setNewTodo("");
  }

  function createToDo() {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 999999),
      content: newTodo,
    };
    onCreateToDo(request);
    clearInput();
  }
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        type="text"
        className="todo-input"
        placeholder="Enter todo"
        onChange={(e) => setNewTodo(e.target.value)}></input>
      <button className="create-todo-btn" onClick={createToDo}>
        Create Todo
      </button>
    </div>
  );
}

export default ToDoCreate;
