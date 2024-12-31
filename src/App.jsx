import React, { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";
function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  return (
    <div className="app-container">
      <ToDoCreate onCreateToDo={createTodo} />
      <ToDoList />
    </div>
  );
}

export default App;
