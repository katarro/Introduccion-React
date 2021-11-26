import React from "react";
import "./TodoSearch.css";
import {TodoContext} from "../TodoContext"
function TodoSearch() {

  const {searchValue,setSearchValue} = React.useContext(TodoContext)

  const onSearchValue = (event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="TodoCreate">
        <input
          className="TodoInput"
          placeholder="Search a Task"
          value={searchValue}
          onChange={onSearchValue}
        />
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };
