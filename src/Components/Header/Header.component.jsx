import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
const Header = () => {
  return (
    <div className="header-container">
      <span>Logo</span>
      <div className="header-routes">
        <span >
          <Link className="header-links" to="/">Home</Link>
        </span>
        <span >
          <Link className="header-links" to="/StudentPage">Students</Link>
        </span>
        <span >
          <Link className="header-links" to="/StaffPage">Instructors</Link>
        </span>
        <span >
          <Link className="header-links" to="/HousePage">House</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
