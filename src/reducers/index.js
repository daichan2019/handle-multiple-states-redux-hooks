import { combineReducers } from "redux";

import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

const reducer = combineReducers({
  counterReducer,
  todoReducer,
});

export default reducer;
