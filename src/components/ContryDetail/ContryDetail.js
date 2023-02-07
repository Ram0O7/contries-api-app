import React from 'react';
import classes from './contryDetail.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import DetailBody from './DetailBody/DetailBody';

const ContryDetail = ({ contries, contry, Visibility, borderContry }) => {
    
    const { image, name } = contry;

    const setBorderContry = (contry) => {
        borderContry(contry);
    }

    return (
        <div className={classes['detail-page']}>
            <button type='button' className={classes.back} onClick={() => Visibility(false)}><FaArrowLeft className={classes['left-arrow']} /> back</button>
            <div className={classes['detail-main']}>
                <img src={image} alt={name.common} />
                <DetailBody contries={contries} contryInfo={contry} borderContry={setBorderContry} />
            </div>
        </div>
    )
}

export default ContryDetail;
