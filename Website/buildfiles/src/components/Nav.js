import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Ensure to link the CSS file

const Nav = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const searchInputRef = useRef(null);
    const searchBarContainerRef = useRef(null);
    const navRef = useRef(null);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
        if (showSearch) {
            searchInputRef.current.focus();
        }

        const handleClickOutside = (event) => {
            if (searchBarContainerRef.current && !searchBarContainerRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSearch]);

    const toggleSearch = () => {
        setShowSearch(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Handle search action here
            console.log('Search:', searchInputRef.current.value);
        } else if (e.key === 'Backspace' && searchInputRef.current.value === '') {
            setShowSearch(false);
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (!showMenu) {
            scrollPositionRef.current = window.scrollY;
        }
    };

    const toggleSettings = () => {
        setShowSettings(!showSettings);
        if (!showSettings) {
            scrollPositionRef.current = window.scrollY;
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const navHeight = navRef.current.offsetHeight;
            const halfwayNav = navHeight / 2;
            if (window.scrollY >= scrollPositionRef.current + halfwayNav) {
                setShowMenu(false);
                setShowSettings(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!showMenu) {
            setTimeout(() => {
                document.querySelector('.overlay')?.classList.add('hidden');
            }, 300);
        } else {
            document.querySelector('.overlay')?.classList.remove('hidden');
        }
    }, [showMenu]);

    useEffect(() => {
        if (!showSettings) {
            setTimeout(() => {
                document.querySelector('.settings-dropdown')?.classList.add('hidden');
            }, 300);
        } else {
            document.querySelector('.settings-dropdown')?.classList.remove('hidden');
        }
    }, [showSettings]);

    return (
        <nav ref={navRef}>
            <div className="nav-container">
                <div className="left-nav">
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
                <div className="right-nav">
                    <div className="search-bar-container" ref={searchBarContainerRef}>
                        {!showSearch && (
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/magnifier-right-svgrepo-com.svg`}
                                className="search-icon"
                                onClick={toggleSearch}
                                alt="Search"
                            />
                        )}
                        {showSearch && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-input"
                                ref={searchInputRef}
                                onKeyDown={handleKeyDown}
                            />
                        )}
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/settings-svgrepo-com.svg`}
                        className="settings-icon"
                        onClick={toggleSettings}
                        alt="Settings"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/hamburger-menu-svgrepo-com.svg`}
                        className="hamburger-icon"
                        onClick={toggleMenu}
                        alt="Menu"
                    />
                </div>
            </div>
            {showMenu && (
                <div className="overlay" onClick={toggleMenu}>
                    <div className="overlay-content" onClick={e => e.stopPropagation()}>
                        <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>Home</NavLink>
                        <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>About</NavLink>
                        <NavLink to="/blog" activeClassName="active" onClick={toggleMenu}>Blog</NavLink>
                        <NavLink to="/contact" activeClassName="active" onClick={toggleMenu}>Contact</NavLink>
                    </div>
                </div>
            )}
            {showSettings && (
                <div className="settings-dropdown" onClick={toggleSettings}>
                    <div className="settings-content" onClick={e => e.stopPropagation()}>
                        <div className="settings-header">Quick Settings</div>
                        <div className="theme-toggle" onClick={toggleTheme}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/${isDarkMode ? 'moon-and-stars-svgrepo-com.svg' : 'sunny-and-cloudy-sunny-weather-cloudy-svgrepo-com.svg'}`}
                                alt={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                                className="theme-icon"
                            />
                            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
