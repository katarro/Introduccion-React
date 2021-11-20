import React from "react";
import "../styles/CreateTodoButton.css"
function CreateTodoButton(){
    const onClickButton = ()=>{
        console.log("Holi")
    }
    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >Agregar</button>
    )
}
export {CreateTodoButton}