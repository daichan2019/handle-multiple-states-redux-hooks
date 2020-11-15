import React from "react";
import { Todos } from "./Todos";
import { TodoInput } from "./TodoInput";

export const TodoApp = () => {
  return (
    <div>
      <h2>TODO!!</h2>
      <Todos />
      <TodoInput />
    </div>
  );
};
