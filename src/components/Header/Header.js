import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.scss';
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className={style.header} data-test="header">
            <nav className={style.nav} data-test="nav">
                <NavLink activeClassName={style.active} exact to="/" className={style.menuItem} data-test="menuItem">News</NavLink>
                <NavLink activeClassName={style.active} to="/contact" className={style.menuItem} data-test="menuItem">Contact</NavLink>
                <NavLink activeClassName={style.active} to="/about" className={style.menuItem} data-test="menuItem">About Us</NavLink>
            </nav>
            <Button children="Add post" />
        </header>
    );
};

export default Header;