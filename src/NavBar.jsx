import React, { useState } from "react";
import "./NavBar.css";
import { BiHomeAlt2, BiSearchAlt, BiUser, BiLogoReact } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import Home from "./Home";

const NavBar = () => {
  const [showHome, setShowHome] = useState(false);
  const toggleHome =() => {
    setShowHome(!showHome);
  }
  return (
    <>
      <div className="container">
        <div className="icon-container">
          <BiLogoReact className="l-icon" />

          <BiHomeAlt2
            className="icon"
            onClick={toggleHome}
          />

          <BiSearchAlt className="icon" />

          <BiUser className="icon" />

          <PiHamburger className="icon" />

          <LiaSignOutAltSolid className="b-icon" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
