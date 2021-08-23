import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>

        <input type="text" className="header_searchInput" />
      </Link>
    </nav>
  );
}

export default Header;
