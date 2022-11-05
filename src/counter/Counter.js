import React, { useState } from "react";

function Counter() {
  const [arr, setArr] = useState(0);

  const incrementHandler = (e) => {
    setArr(arr + 1);
  };

  const decrementHandler = (e) => {
    setArr(arr - 1);
  };

  return (
    <div>
      <h1>{arr}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default Counter;
