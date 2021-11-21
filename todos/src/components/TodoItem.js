import React from "react";
import "../styles/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        {/* El icono va fuera del SPAN */}
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
    </li>
  );
}

export { TodoItem };
