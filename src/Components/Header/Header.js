import React from "react";
import Navbar from "../navbar/Navbar";
// import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={require("../../assets/logo1.png")} alt="zjhxb sh" />
      </div>
      <Navbar></Navbar>
      <div className="tour-top-right">
        <a href="#">&#8594; Strat a Journy</a>
      </div>
    </div>
  );
}

export default Header;
