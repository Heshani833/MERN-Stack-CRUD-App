import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <div>
      <ul className="Home-ul">
        <li className="home-li">
          <h1>Home</h1>
        </li>
        <li className="home-li">
          <h1>Add User</h1>
        </li>
        <li className="home-li">
          <h1>User Details</h1>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
