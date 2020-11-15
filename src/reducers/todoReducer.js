import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from "./../constants/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "One",
    },
    {
      id: 2,
      title: "Two",
    },
    {
      id: 3,
      title: "Three",
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case DELETE_ALL_TODOS:
      return initialState;
    default:
      return state;
  }
};
