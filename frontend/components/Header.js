import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <h1>TODO App</h1>
        <title>Todo Application - Group 14</title>
      </header>
      <h4 style={{ color: "wheat" }}>Implemented Features:</h4>
      <ul>
        <li>Add a new task</li>
        <li>Complete a task</li>
        <li>Toggle the view between All, Active and Completed tasks</li>
        <li>Remove one or all tasks under the Completed tab</li>
      </ul>
      <br />
    </>
  );
}
