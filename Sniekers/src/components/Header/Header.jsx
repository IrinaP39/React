import React from "react";
import cls from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={cls.header}>
      <h1>Sneakers store</h1>
      <nav className={cls.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          {" "}
          Cart
        </NavLink>
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "#FFFFFF80",
          })}
        >
          {" "}
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
