import React from "react";
import "../styles/TodoSearch.css";
function TodoSearch() {
  
  const onSearchValueChange = (event) =>{
    console.log(event.target.value)
  }
  
  return (
    <React.Fragment>
      <input className="TodoSearch" placeholder="Cebolla" 
      onChange={onSearchValueChange}
      />
    </React.Fragment>
  );
}

export { TodoSearch };
