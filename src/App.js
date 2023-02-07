import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ContriesHome from "./components/Home/ContriesHome";
import ContryDetail from "./components/ContryDetail/ContryDetail";
import NavBar from "./components/NavBar/NavBar";

const url = "https://restcountries.com/v3.1/all";

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [contries, setContries] = useState([]);
  const [option, setOption] = useState('Asia');
  const [showContryDetail, setShowContryDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [ChosenContry, setChosenContry] = useState({});
  const [theme, setTheme] = useState(getStorageTheme());
  const [isLoading, setIsLoading] = useState(true);

  const fetchContries = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const data = await response.json();

      const contryList = [];
      for (const key in data) {
        contryList.push({
          name: data[key].name,
          image: data[key].flags.svg,
          population: data[key].population,
          region: data[key].region,
          capital: data[key].capital,
          borders: data[key].borders,
          subregion: data[key].subregion,
          languages: data[key].languages,
          currencies: data[key].currencies,
          tld: data[key].tld,
          alias: data[key].cca3,
        });
      }
      setContries(contryList);
      setIsLoading(!isLoading);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleTheme = () => {
    console.log(theme);
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  const currentRegion = (value) => {
    setOption(value);
  }

  const onSearch = (search) => {
    setSearchQuery(search);
  }

  const clickedContry = (contry) => {
    setChosenContry(contry);
    setShowContryDetail(true);
    setSearchQuery('');
  }

  const setVisibility = (visible) => {
    if (!visible) {
      setShowContryDetail(false);
      setSearchQuery('');
      setOption('Asia');
    }
  }

  const borderContry = (contry) => {
    const foundCountry = contries.find((c) => c.name.common === contry);
    setChosenContry(foundCountry);
  }

  useEffect(() => {
    fetchContries();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <main className="home-container">
      <NavBar toggleTheme={toggleTheme} />
      {!showContryDetail &&
        <>
          <Header region={currentRegion} search={onSearch} />
          { !isLoading ?
          <ContriesHome
            clickedContry={clickedContry}
            contries={contries}
            option={option}
            searchQuery={searchQuery.toLocaleLowerCase()}
             />
             :
             <h2 style={{textAlign: 'center'}}>Loading...</h2>
          }
        </>
      }
      {showContryDetail && <ContryDetail
        contries={contries}
        contry={ChosenContry}
        borderContry={borderContry}
        Visibility={setVisibility}
      />}
    </main>
  );
}

export default App;
