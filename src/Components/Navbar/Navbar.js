import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className='nav'>
                <a href="/" className="logo">LearnEng</a>
                <div className="navigation">
                    <div className="navigation-item">
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/about">About</a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;