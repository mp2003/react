import React, { useState } from "react";
import Counter from "./Counter.jsx";
import Calculator from "./Calculator.jsx";
import DropDwon from "./DropDwon.jsx";
import { Router } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const App = () => {
  const [showForm, setShowForm] = useState("login");
  const toggelForm = (formName) => {
    setShowForm(formName);
  };
  return (
    <>
      {/* 

         <Calculator />
    <DropDwon />
    <Counter />*/}
      {showForm === "login" ? (
        <Login onFormSwitch={toggelForm} />
      ) : (
        <Register onFormSwitch={toggelForm} />
      )}
    </>
  );
};

export default App;
