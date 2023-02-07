import React, { useEffect, useState } from 'react';
import Contry from '../ContrySingle/Contry';
import classes from './contriesHome.module.css';

const ContriesHome = ({ contries, option, searchQuery, clickedContry }) => {

  const [currentContries, setCurrentContries] = useState([]);

  const selectedContries = contries.filter(contry => contry.region === option);
  const searchedContries = contries.filter(contry => contry.name.common.toLowerCase().includes(searchQuery));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== '' && searchedContries.length > 0) {
        setCurrentContries(searchedContries);
      } else {
        setCurrentContries(selectedContries);
      }
    }, 500);
    return () => { clearTimeout(timer) };
  }, [searchQuery, option]);

  return (
    <section className={classes['contries-home']}>
      {(currentContries.length === 0 ? selectedContries : currentContries).map((contry, index) => {
        const { name, capital, region, population, image } = contry;
        return (<Contry
          id={index}
          image={image}
          name={name}
          population={population}
          region={region}
          capital={capital}
          onClick={() => {clickedContry(contry)}}
        />);
      })}
    </section>
  )
}

export default ContriesHome;
