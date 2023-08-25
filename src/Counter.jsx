import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const setCounter = (operation) => {
    if (operation === "+") {
      setValue(value + 1);
    } else if (operation === "-") {
      setValue(value - 1);
    } else if (operation === "reset") {
      setValue(0);
    }
  };

  return (
    <>
      <button onClick={() => setCounter("+")}>+</button>
      <input type="text" value={value} readOnly />
      <button onClick={() => setCounter("-")}>-</button>
      <br />
      <button onClick={() => setCounter("reset")}>reset</button>
    </>
  );
};

export default Counter;
