import "./App.css";

import React from "react";
import { Counter } from "./components/Counter";
import { TodoApp } from "./components/TodoApp";

export const App = () => {
  return (
    <div>
      <h1>Redux Practice with Todo and Counter App</h1>
      <Counter />
      <TodoApp />
    </div>
  );
};
