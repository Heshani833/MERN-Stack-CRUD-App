import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <div>
      <ul className="Home-ul">
        <li className="home-li">
          <Link to="/home" className="nav-link">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/add-user" className="nav-link">
            <h1>AddUser</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/user-details" className="nav-link">
            <h1>UserDetails</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/register" className="nav-link">
            <h1>Register</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
