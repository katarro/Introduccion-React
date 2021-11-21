import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter(props) {
  return (
    <React.Fragment>
      <div className="TodoCounter-container">
        <h1 className="TodoCounter-h1">Your Tasks</h1>
        <h2 className="TodoCounter">Completed {props.completed} of {props.total} TODOs</h2>
      </div>
    </React.Fragment>
  );
}
// Obliga a importar con el MISMO Nombre
export { TodoCounter };
