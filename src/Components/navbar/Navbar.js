import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="nav-elements">
          <a className="nav-links" href="#">
            Home
          </a>
        </div>
        <div className="nav-elements">
          <a className="nav-links" href="#">
            Tour
          </a>
        </div>
        <div className="nav-elements">
          <a className="nav-links" href="#">
            Contacts
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
