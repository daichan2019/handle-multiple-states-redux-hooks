import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, deleteAllTodos } from "./../actions/todo";

export const Todos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.id} {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(deleteAllTodos())}>
        DELETE ALL TODOS
      </button>
    </>
  );
};
