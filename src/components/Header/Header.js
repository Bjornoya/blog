import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header} data-test="header">
      <nav className={style.nav} data-test="nav">
        <NavLink
          activeClassName={style.active}
          exact
          to="/"
          className={style.menuItem}
          data-test="menuItem"
        >
          News
        </NavLink>
        <NavLink
          activeClassName={style.active}
          to="/about"
          className={style.menuItem}
          data-test="menuItem"
        >
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
