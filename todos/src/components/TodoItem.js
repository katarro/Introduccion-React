import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props) {
  const onClomplete = () => {
    console.log("Ya completaste el To Do: " + props.text);
  };

  const onDelete = () => {
    console.log("Borraste el To Do: " + props.text);
  };
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onClomplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
