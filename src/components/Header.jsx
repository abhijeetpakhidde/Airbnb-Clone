import React from "react";
import "./Header.css";
import { FaAirbnb, FaSearch, FaBars, FaUserCircle } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <FaAirbnb className="header__logo-icon" />
        <span className="header__logo-text">airbnb</span>
      </div>

      <div className="header__center">
        <div className="header__text">Anywhere</div>
        <div className="header__text">Any week</div>
        <div className="header__text">Add guests</div>
        <div className="search-icon-container">
          <FaSearch />
        </div>
      </div>

      <div className="header__right">
        <div className="header__right-text">Become a host</div>
        <div className="header__globe">
          <FiGlobe style={{ fontSize: "16px" }} />
        </div>
        <div className="header__lines">
          <FaBars style={{ fontSize: "16px" }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
