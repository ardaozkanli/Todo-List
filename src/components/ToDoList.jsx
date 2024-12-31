import React from "react";
import ToDo from "./ToDo";
function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div>
      {todos &&
        todos.map((todo, index) => (
          <ToDo
            key={index}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default ToDoList;
