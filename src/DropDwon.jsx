import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Dummy from "./Dummy";

const DropDwon = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/testimonial">Testimonial</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to the Home Page</h1>
          </Route>
          <Route path="/about-us">
            <Dummy />
          </Route>
          <Route path="/contact">
            <Dummy />
          </Route>
          <Route path="/testimonial">
            <Dummy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default DropDwon;
