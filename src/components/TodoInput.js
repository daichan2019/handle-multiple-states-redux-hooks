import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./../actions/todo";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);

  const handleClick = () => {
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div>
      <input onChange={handleChange} value={title} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
