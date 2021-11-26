import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="TODOs">
      <ul className="TodoList">{props.children}</ul>
    </div>
  );
}

export { TodoList };
