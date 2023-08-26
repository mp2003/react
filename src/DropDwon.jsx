import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Dummy from "./Dummy";

const DropDwon = () => {
  return (
    <>
      <ul>
        <nav>
          <li>
            <NavLink to="/">Home</NavLink>
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
        </nav>
      </ul>
      <Routes>
        <Route path="/" element={<div>Welcome to the Home Page</div>} />
        <Route path="/about-us" element={<Dummy />} />
        <Route path="/contact" element={<Dummy />} />
        <Route path="/testimonial" element={<Dummy />} />
      </Routes>
    </>
  );
};

export default DropDwon;
