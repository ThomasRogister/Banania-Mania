import React from "react";
import logo_btn from "../assets/logo_btn.png";
import logo_font from "../assets/logo_font.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="top_header">
        <Link to="/products" className="header__logout">
          <img className="header__logo_btn" src={logo_btn} alt="logo banane" />
        </Link>
        <nav className="header__nav">
          <Link to="/" className="header__logout">
            Log out
          </Link>
          <Link to="/About" className="header__basket">
            Panier
          </Link>
        </nav>
      </div>
      <img
        className="header__logo_font"
        src={logo_font}
        alt="logo banana mania"
      />
    </header>
  );
}
export default Header;
