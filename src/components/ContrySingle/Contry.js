import React from 'react';
import classes from './contry.module.css';

const Contry = ({ id, image, name, population, region, capital, onClick }) => {
    return (
        <article className={classes.contry} key={id} onClick={onClick}>
            <div className={classes.img}>
                <img className={classes['contry-img']} src={image} alt={name.common} />
                </div>
            <div className={classes['contry-details']}>
                <h2>{name.common}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </article>
    )
}

export default Contry;
