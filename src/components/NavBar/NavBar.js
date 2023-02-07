import React, { useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

import classes from './navbar.module.css';

const NavBar = ({ toggleTheme }) => {
    const [isLightMode, setIsLightMode] = useState(true);

    const handleClick = () => {
        toggleTheme();
        setIsLightMode(!isLightMode);
    }

    return (
        <nav>
            <h1>where in the world?</h1>
            <button
                type='button'
                style={{ background: 'none', border: 'none' }}
                onClick={handleClick}
            >{isLightMode ? <FaMoon className={classes.icon}/> : <FaSun className={classes.icon}/>} {isLightMode ? 'dark' : 'light'} mode</button>
        </nav>
    )
}

export default NavBar;
