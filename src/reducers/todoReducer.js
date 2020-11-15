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
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      const todos = { title: action.payload.title, id };
      return [
        ...state,
        {
          ...todos,
        },
      ];
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case DELETE_ALL_TODOS:
      return {
        initialState,
      };
    default:
      return state;
  }
};
