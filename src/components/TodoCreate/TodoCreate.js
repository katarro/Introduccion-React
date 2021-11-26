import React from "react";
import "./TodoCreate.css";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
function TodoCreate() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault(); // Evita recargar la pagina
    addTodo(newTodoValue);
    setNewTodoValue("")
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <div className="TodoSearch">
          <h1>Create New Task</h1>
          <input
            className="TodoInput"
            placeholder="Write a new Task"
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="container-button">
          <button className="CreateTodoButton" type="submit">
            Create Task
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export { TodoCreate };
