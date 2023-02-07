import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

import './navbar.module.css';

const NavBar = ({toggleTheme}) => {
    return (
        <nav>
            <h1>where in the world?</h1>
            <button
                style={{ background: 'none', border: 'none' }}
                onClick={toggleTheme}
            ><FaMoon /> dark mode</button>
        </nav>
    )
}

export default NavBar;
