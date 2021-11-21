import React from "react";
import "../styles/TodoCreate.css";
function TodoCreate() {
  return (
    <React.Fragment>
      <div className="TodoSearch">
        <h1>Create New Task</h1>
        <input className="TodoInput" placeholder="Write a new Task" />
      </div>
    </React.Fragment>
  );
}

export { TodoCreate };
