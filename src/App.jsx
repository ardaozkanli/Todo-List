import React, { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";
function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  function updateToDo(newTodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      } else {
        return newTodo;
      }
    });
    setTodos([...updatedTodos]);
  }

  function removeToDo(todoId) {
    const extractedArray = todos.filter((todo) => todo.id !== todoId);
    setTodos(extractedArray);
  }
  console.log(todos);

  return (
    <div className="app-container">
      <ToDoCreate onCreateToDo={createTodo} />
      <ToDoList
        onRemoveTodo={removeToDo}
        todos={todos}
        onUpdateTodo={updateToDo}
      />
    </div>
  );
}

export default App;
