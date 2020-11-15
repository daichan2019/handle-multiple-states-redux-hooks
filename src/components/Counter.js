import React from "react";
import { increment, decrement, reset } from "./../actions/counter";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);

  console.log(count);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter</h2>
      <span>count: {count}</span>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </>
  );
};
