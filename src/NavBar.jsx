import React from "react";
import "./NavBar.css";
import { BiHomeAlt2, BiSearchAlt, BiUser, BiLogoReact } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";
import { LiaSignOutAltSolid } from "react-icons/lia";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <div className="icon-container">
          <BiLogoReact className="l-icon" />

          <BiHomeAlt2 className="icon" />

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
