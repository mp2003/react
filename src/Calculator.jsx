import React, { useState } from "react";

const Calculator = () => {
  const [Counter, setCounter] = useState("");
  const handelValue = (e) => {
    setCounter(Counter.concat(e.target.value));
  };
  const handelClear = () => {
    setCounter(Counter.slice(0, -1));
  };
  return (
    <>
      <input type="text" value={Counter} readOnly />
      <div className="keypad">
        <button value="1" onClick={handelValue}>
          1
        </button>
        <button value="2" onClick={handelValue}>
          2
        </button>
        <button value="3" onClick={handelValue}>
          3
        </button>
        <button value="4" onClick={handelValue}>
          4
        </button>
        <button value="5" onClick={handelValue}>
          5
        </button>
        <button value="6" onClick={handelValue}>
          6
        </button>
        <button value="7" onClick={handelValue}>
          7
        </button>
        <button value="8" onClick={handelValue}>
          8
        </button>
        <button value="9" onClick={handelValue}>
          9
        </button>
        <button value="+" onClick={handelValue}>
          +
        </button>
        <button value="-" onClick={handelValue}>
          -
        </button>
        <button value="*" onClick={() => {
          handelValue({target: { value: "*" }})
        }}>
          *
        </button>
        <button
          value="/"
          onClick={() => {
            handelValue({ target: { value: "/" } });
          }}
        >
          /
        </button>
        <button value="clear" onClick={handelClear}>
          clear
        </button>
      </div>
    </>
  );
};

export default Calculator;
