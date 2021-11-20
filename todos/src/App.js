// import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {/* Este mapa se está mandando como CHILDREN a TodoList */}
        {todos.map((item) => (
          <TodoItem key={item.text} text={item.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
