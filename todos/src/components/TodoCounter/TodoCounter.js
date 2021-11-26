import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const {total, length} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <div className="TodoCounter-container">
        <h1 className="TodoCounter-h1">Your Tasks</h1>
        <h2 className="TodoCounter">Completed {length} of {total} TODOs</h2>
      </div>
    </React.Fragment>
  );
}
// Obliga a importar con el MISMO Nombre
export { TodoCounter };
