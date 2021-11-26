import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoCreate } from "../TodoCreate/TodoCreate";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoContext } from "../TodoContext";
import image_task from "../../media/img-task.svg";

function AppUI() {
  const { error, loading, searchedTodos, completeTodos, deletTodo } =
    React.useContext(TodoContext);
  return (
    <div className="App">
      <div className="left">
        <TodoCreate />

        <img className="TodoSearch-img" src={image_task} alt="img" />
      </div>

      <div className="right">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading && <p>Estamos Cargando...</p>}
          {error && <p>Hubo un error...</p>}
          {!loading && !searchedTodos.length && <p>¡Escribe tu primer TODO!</p>}

          {/* Este mapa se está mandando como CHILDREN a TodoList */}
          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              // Le pasamos la funcion al Componente hijo, y este ejecuta la función, cada vez que hace un click
              onComplete={() => completeTodos(item.text)}
              onDelete={() => deletTodo(item.text)}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export { AppUI };
