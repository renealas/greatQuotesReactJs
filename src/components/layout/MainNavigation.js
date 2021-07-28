import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><NavLink to='/quotes'><img src='https://s3.amazonaws.com/www-inside-design/uploads/2018/01/creativity-quotes.jpg' alt='Logo'/></NavLink> Frases</div>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink to='/quotes' activeClassName={classes.active}>Frases</NavLink></li>
          <li><NavLink to='/new-quote' activeClassName={classes.active}>Añadir Frase</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
