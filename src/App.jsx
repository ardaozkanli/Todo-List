import React from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="app-container">
      <ToDoCreate />
      <ToDoList />
    </div>
  );
}

export default App;
