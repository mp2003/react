import React, { useState } from "react";
import Counter from "./Counter.jsx";
import Calculator from "./Calculator.jsx";
import DropDwon from "./DropDwon.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Search from "./Search.jsx";
import User from "./User.jsx";
import Menu from "./Menu.jsx";
import "./App.css";
import Default from "./Default.jsx";

const App = () => {
  // const [showForm, setShowForm] = useState("login");
  const [showComponent, setShowComponent] = useState("default");
  // const toggelForm = (formName) => {
  //   setShowForm(formName);
  // };
  const toggelComponent = (componentName) => {
    setShowComponent(componentName);
  };
  return (
    <>
      {/* 
         <Calculator />
    <DropDwon />
    <Counter />
    
    ----------------------------------------------------------------
    {showForm === "login" ? (
        <Login onFormSwitch={toggelForm} />
      ) : (
        <Register onFormSwitch={toggelForm} />
      )}
    ----------------------------------------------------------------
    */}
      <div className="app-container">
        <aside>
          <NavBar component={toggelComponent} />
        </aside>
        <main>
          {showComponent === "default" && <Default />}

          {showComponent === "home" && <Home />}
          {showComponent === "search" && <Search />}
          {showComponent === "user" && <User />}
          {showComponent === "menu" && <Menu />}
        </main>
      </div>
    </>
  );
};

export default App;
