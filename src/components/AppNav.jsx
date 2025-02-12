import React from "react";
import Styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
