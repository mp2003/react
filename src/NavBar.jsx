import React, { useState } from "react";
import "./NavBar.css";
import { BiHomeAlt2, BiSearchAlt, BiUser, BiLogoReact } from "react-icons/bi";
import { PiHamburger } from "react-icons/pi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import Home from "./Home";
import Search from "./Search";
import User from "./User";
import Menu from "./Menu";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="icon-container">
            <BiLogoReact className="l-icon" />

            <BiHomeAlt2
              className="icon"
              onClick={() => {
                props.component("home");
                console.log("home clicked");
              }}
            />

            <BiSearchAlt
              className="icon"
              onClick={() => {
                props.component("search");
              }}
            />

            <BiUser className="icon" onClick={() => {
              props.component("user");
            }}/>

            <PiHamburger className="icon" onClick={() => {
              props.component("menu");
            }}/>

            <LiaSignOutAltSolid className="b-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
