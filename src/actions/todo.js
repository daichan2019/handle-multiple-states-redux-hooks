import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "./../constants/actionTypes";

let nextTodoId = 0;
export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      title,
      id: nextTodoId++,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const deleteAllTodos = () => {
  return {
    type: DELETE_ALL_TODOS,
  };
};
