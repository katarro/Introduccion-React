import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({search,setSearch}) {

  const onSearchValue = (event) =>{
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="TodoCreate">
        <input
          className="TodoInput"
          placeholder="Search a Task"
          value={search}
          onChange={onSearchValue}
        />
      </div>
    </React.Fragment>
  );
}

export { TodoSearch };
