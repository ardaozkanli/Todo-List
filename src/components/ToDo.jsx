import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
function ToDo() {
  return (
    <div className="todo-card-container">
      <div>
        <p className="todo-name">First Todo</p>
      </div>
      <div className="todo-icons">
        <FaTrashAlt />
        <FaEdit />
      </div>
    </div>
  );
}

export default ToDo;
