import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
                <a href="/faq">FAQ</a>
            </nav>
        </div>
    );
};

export default Header;