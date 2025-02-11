import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <Link to="/" className="logo">Portfolio</Link>
                <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Skills">Skills</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                <div className="nav-right">
                    <div 
                        id="menu-icon" 
                        className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} 
                        onClick={toggleMenu}
                    ></div>
                </div>
            </header>
        </>
    );
}

export default Navbar;