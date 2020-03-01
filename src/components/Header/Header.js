import React from 'react';
import style from './Header.module.scss';
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className={style.header} data-test="header">
            <nav className={style.nav} data-test="nav">
                <div className={style.menuItem} data-test="menuItem">News</div>
                <div className={style.menuItem} data-test="menuItem">Contact</div>
                <div className={style.menuItem} data-test="menuItem">About Us</div>
            </nav>
            <Button children="Add post" />
        </header>
    );
};

export default Header;