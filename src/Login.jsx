import React, { useState } from "react";
import { NavLink, Routes , Route   } from "react-router-dom";
import  Register  from "./Register"

const Login = (props) => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit =(e) => {
    e.preventDefault();
    console.log(UserName);    
  }
  return (
    <>
      <div className="heading">
        <h2>Welcome to Login</h2>
        <span className="">Please enter your Username and your Password</span>
      </div>
      <div className="login-detail">
        <form onSubmit={handelSubmit}>
          <label for="email">Username</label>
          <input
            type="email"
            name="username"
            placeholder="UserName Or Email"
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button>Login</button>
        </form>
        <span>
          Don't have an Account?{" "}
          <NavLink to="/Register" onClick={()=>{props.onFormSwitch('Register')}}> Register Here</NavLink>{" "}    
        </span>
       <Routes>
       <Route path="/Register" element={<Register />} />
       </Routes>
      </div>
    </>
  );
};

export default Login;
