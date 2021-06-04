import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList({ todos, deleteItem, toggleToDo }) {
  return (
    <div>
      <ul>
        {todos.map((todoItem) => {
          return (
            <TodoItem
              {...todoItem}
              key={todoItem.id}
              deleteItem={deleteItem}
              toggleToDo={toggleToDo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
