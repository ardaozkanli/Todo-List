import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  function removeToDo() {
    onRemoveTodo(id);
  }
  function updateToDo() {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  }

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);
  return (
    <div className="todo-card-container">
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            className="todo-input todo-input-edit"></input>
        ) : (
          <p className="todo-name">{content}</p>
        )}
      </div>
      <div className="todo-icons">
        <FaTrashAlt onClick={removeToDo} />
        {!editable ? (
          <FaEdit onClick={() => setEditable(true)} />
        ) : (
          <FaCheck onClick={updateToDo} />
        )}
      </div>
    </div>
  );
}

export default ToDo;
