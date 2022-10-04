import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <h2 id="sitename">Guilt Free</h2>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/calculator"
            >
              Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
