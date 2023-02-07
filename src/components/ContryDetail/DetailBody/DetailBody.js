import React from 'react';
import classes from './detailBody.module.css';

const DetailBody = ({ contryInfo, borderContry, contries }) => {
  const { name, population, region, capital, subregion, languages, currencies, tld, borders } = contryInfo;
  const nativeName = name.nativeName[Object.keys(name.nativeName)[0]].common;
  const languageSpoken = [];
  const currencyUsed = [];
  const borderList = [];

  if (borders) {
    borders.forEach((border) => {
      let FoundContry = contries.find((contry) => contry.alias === border);
      borderList.push(FoundContry.name.common);
    });
  }

  Object.keys(currencies).forEach((key) => {
    currencyUsed.push(currencies[key].name)
  })
  Object.keys(languages).forEach((key) => {
    languageSpoken.push(languages[key]);
  })

  return (
    <div className={classes['detail-body']}>
      <h1>{name.common}</h1>
      <div className={classes['body-inner']}>
        <div className={classes.general}>
          <p><span>native name: </span>  {nativeName}</p>
          <p><span>population: </span>  {population}</p>
          <p><span>region: </span>  {region}</p>
          <p><span>sub region: </span>  {subregion}</p>
          <p><span>capital: </span>  {capital}</p>
        </div>
        <div className={classes.specific}>
          <p><span>top level domain: </span> {tld.toString()}  </p>
          <p><span>currencies: </span> {currencyUsed.toString()} </p>
          <p><span>languages: </span> {languageSpoken.toString()} </p>
        </div>
      </div>
      <div className={classes['border-contries']}>
        <span>border contries:  </span>
        {borders ?
          borderList.map((border, index) => {
          return (
            <button key={index} className={classes['border-btn']} onClick={() => borderContry(border)}>{border}</button>
          )
          })
          :
          <span>it's an island</span>
        }
      </div>
    </div>
  )
}

export default DetailBody;
