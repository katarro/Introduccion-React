import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todos, saveTodos, loading, error] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((item) => item.completed === true);
  const length = completedTodos.length;
  const total = todos.length;
  
  let searchedTodos = [];

  // Preguntamos si escribio algo el usuario
  searchValue.length < 1
    ? (searchedTodos = todos)
    : // No entendí este codigo :C
      (searchedTodos = todos.filter((item) => {
        const todoText = item.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }));

  const completeTodos = (text) => {
    // 1 Encontramos la posicion del To Do
    const index = todos.findIndex((item) => item.text === text);
    // 2.-Cambiamos su estado de false a true
    const newTodos = [...todos];

    // Codigo para cambiar entre uno y otro
    newTodos[index].completed === false
      ? (newTodos[index].completed = true)
      : (newTodos[index].completed = false);

    // 3.-Agregamos el To Do actualizado al array de To DOs
    saveTodos(newTodos);
  };
  const addTodo = (text) =>{
    const newTodo = [...todos]

    newTodo.push({
      completed: false,
      text
    })
    saveTodos(newTodo)
  }
  const deletTodo = (text) => {
    const deleted = todos.filter((item) => item.text !== text);
    saveTodos(deleted);
  };
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        todos,
        searchedTodos,
        completeTodos,
        deletTodo,
        length,
        total,
        searchValue,
        setSearchValue,
        loading,
        error,
        addTodo
        
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
