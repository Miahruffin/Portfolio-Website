import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="brand">
                    <NavLink to="/">MyBrand</NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
