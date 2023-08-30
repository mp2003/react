import React from "react";

const Login = () => {
  return (
    <>
      <div className="heading">
        <h2>Welcome to Login</h2>
        <span className="">Please enter your Username and your Password</span>
      </div>
      <div className="login-detail">
        <form>
          <label for="email">Username</label>
          <input
            type="email"
            name="username"
            placeholder="UserName Or Email"
          ></input>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*********"
          ></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
