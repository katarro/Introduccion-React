// import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import "./index.css";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
