import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="mini_header">
            <div className='mini'>
                <p className="logo">Kyan</p>
                <p className="logo2">Exports</p>
                <p className='logo3'>ltd</p>
            </div>
            <div className={`nav ${isDropdownVisible ? 'dropdown-visible' : ''}`}>
                <div className="nav-toggle" onClick={toggleDropdown}>
                    {/* Icon or text for the dropdown toggle */}
                    ☰
                </div>
                <ul className={`nav-links ${isDropdownVisible ? 'dropdown' : ''}`}>
                    {/* Use Link component for navigation */}
                    <li className='links'>
                        <Link className='links' to="/home">Home</Link>
                    </li>
                    <li className="links">
                        <Link className='links' to="/products">Products</Link>
                    </li>
                    <li className="links">
                        <Link className='links' to="/contact">Inquiry</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
