import React,{useEffect, useRef} from 'react';
import classes from './header.module.css';
import { FaAmericanSignLanguageInterpreting, FaSearch } from 'react-icons/fa';

const Header = ({ region, search }) => {
    const inputRef = useRef('');
    const selectRef = useRef('');

    useEffect(() => {
        if(inputRef.current.value !== '')
        inputRef.current.focus();
    },[])

    return (
        <header className={classes['filter-header']}>
            <div className={classes.input}>
                <input ref={inputRef} type='text' placeholder='search for a country...' onChange={(e) => search(e.target.value)} />
                <FaSearch className={classes.search} />
            </div>
            <select name="select-element" id="select-id" defaultValue='Asia' onChange={(e) => region(e.target.value)}>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </header>
    )
}

export default Header;
