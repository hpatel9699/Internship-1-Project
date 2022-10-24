import React, { useState } from "react";

export default function Item({ todo, todos, setTodos }) {
  const [mutableTodo, setMutableTodo] = useState(todo);

  const classes = mutableTodo.completed ? "completed" : "";
  const checkIcon = mutableTodo.completed ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
      <path
        fill="none"
        stroke="#FFF"
        strokeWidth="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  ) : (
    ""
  );

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={mutableTodo.completed}
      />
      <div className="checkbox-border-wrap">
        <span className="checkbox" onClick={toggleCompleted}>
          {checkIcon}
        </span>
      </div>

      <p>{mutableTodo.content}</p>
      <div className="checkbox-border-wrap">
        <span
          className="checkbox"
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          X
        </span>
      </div>
    </li>
  );
}
