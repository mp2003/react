import React, { useState } from "react";

const App = () => {
  const [setValue, setSetValue] = useState(0);
  const setCounter = (value) => {
    if (value === "+") return setSetValue(setValue+1);
    else if (value === "-") return setSetValue(setValue-1);
    else if (value === "reset") return setSetValue(0)
  };
  return (
    <>
      <button
        onClick={() => {
          setCounter("+");
        }}
      >
        +
      </button>
      <input type="text" value={setValue} readOnly />
      <button
        onClick={() => {
          setCounter("-");
        }}
      >
        -
      </button>
        <br />
      <button onClick={() => {
        setCounter('reset')
      }}>reset</button>
    </>
  );
};

export default App;
