import React from "react";
import "../styles/CreateTodoButton.css";
function CreateTodoButton() {
  const onClickButton = () => {
    console.log("Holi");
  };
  return (
    <div className="container-button">
      <button className="CreateTodoButton" onClick={onClickButton}>
        Create Task
      </button>
    </div>
  );
}
export { CreateTodoButton };
