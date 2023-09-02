import React from "react";
import "./NavBar.css";
import { BiHomeAlt2, BiSearchAlt, BiUser, BiLogoReact } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <BiLogoReact className="l-icon" />

        <div className="icon-container">
          <BiHomeAlt2 className="icon" />
          
          <BiSearchAlt className="icon" />
          
          <BiUser className="icon" />
          
          <PiHamburger className="icon" />  
          </div>
      </div>
    </>
  );
};

export default NavBar;
