import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"/>
      </div>
      
      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
              <span className="header_optionLineOne">Hello</span>
              <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">And Orders</span>              
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>              
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
