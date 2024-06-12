import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { routes } from "../Data/dummy";
import "../Styles/navbar.scss";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>Perpex</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            {/* Use Link instead of anchor tags */}
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        {/* Add your login and register buttons */}
      </div>
    </div>
  );
};

export default Navbar;
