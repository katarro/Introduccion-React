// import "./App.css";
import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import image_task from "../media/img-task.svg";
import "../styles/App.css";

const defaulTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: true },
  { text: "Llorar la llorona", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState("");

  // Cuantos TODOs se han marcado como comletado
  const completedTodos = todos.filter((item) => item.completed === true);
  const length = completedTodos.length;
  const total = todos.length;
  //const completedTodos = todos.filter((item) => !!item.completed)

  let searchedTodos = [];

  // Preguntamos si escribio algo el usuario
  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    // No entendí este codigo :C
    searchedTodos = todos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <div className="App">
      <div className="left">
        <TodoCreate />
        <CreateTodoButton />
        <img className="TodoSearch-img" src={image_task} alt="img" />
      </div>

      <div className="right">
        <TodoCounter completed={length} total={total} />
        <TodoSearch 
          search={searchValue}
          setSearch={setSearchValue}
        />
        <TodoList>
          {/* Este mapa se está mandando como CHILDREN a TodoList */}
          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;
