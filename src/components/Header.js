import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <header>
    <div className="container">
      <div className="brand">
        <img
          src="http://vignette4.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png/revision/latest?cb=20160907114210"
          alt="logo"
        ></img>{" "}
      </div>
      <div className="menu">
        <Link to="/" className="menu-item">
          Home
        </Link>
      </div>
    </div>
  </header>
);
export default Header;
