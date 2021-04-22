import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as AI from "react-icons/ai";
function Navbar({ click }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i>
              <AI.AiFillCaretLeft />
            </i>
            <span>Cart</span>
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shope</Link>
        </li>
      </ul>
      {/* Hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
