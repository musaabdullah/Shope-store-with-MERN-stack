import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      {/* Links */}
      <ul className="navbar__links">
        <li>
          <Link to="cart"></Link>
        </li>
      </ul>
      {/* Hamburger menu */}
    </nav>
  );
}

export default Navbar;
