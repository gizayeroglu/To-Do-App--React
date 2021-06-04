import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem, isCompletedTodo, toggleToDo } = props;

  return (
    <li className='list-group-item'>
      <div
        className={isCompletedTodo && "listedItemCompleted"}
        onClick={(e) => toggleToDo(id)}
      >
        {content}
        <button onClick={(e) => deleteItem(e, id)} className='buttonDelete'>
          Sil
        </button>
      </div>
    </li>
  );
}

export default Todo;
