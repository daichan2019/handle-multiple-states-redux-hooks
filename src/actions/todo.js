import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "./../constants/actionTypes";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
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
