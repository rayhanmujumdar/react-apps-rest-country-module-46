import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to My Rest countries</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;