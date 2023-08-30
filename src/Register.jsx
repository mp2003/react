import React, { useState } from "react";
import { NavLink, Routes , Route   } from "react-router-dom";

const Register = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(UserName);
  };
  return (
    <>
      <div className="login-detail">
        <form onSubmit={handelSubmit}>
          <label htmlFor="name">Name</label>
          <input
          id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />

          <label htmlFor="email">Username</label>
          <input
          id="email"
            type="email"
            name="username"
            placeholder="UserName Or Email"
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <label htmlFor="password">Password</label>
          <input
          id="password"
            type="password"
            name="password"
            placeholder="*********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button>Create Account</button>
        </form>
        <span>
          Already have an Account?{" "}
          <NavLink to="/Register"> Register Here</NavLink>{" "}    
        </span>
       <Routes>
       <Route path="/Register" element={<Register />} />
       </Routes>
      </div>
    </>
  );
};

export default Register;
