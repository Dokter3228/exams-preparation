import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">СЭУ</NavLink>
        <NavLink to="/thermo">Термуха</NavLink>
        <NavLink to="/material">Мат</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
