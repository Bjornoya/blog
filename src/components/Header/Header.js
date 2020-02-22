import React from 'react';

const Header = () => {
    return (
        <header data-test="header">
            <nav data-test="nav">
                <div data-test="menuItem">News</div>
                <div data-test="menuItem">Contact</div>
                <div data-test="menuItem">About Us</div>
            </nav>
        </header>
    );
};

export default Header;