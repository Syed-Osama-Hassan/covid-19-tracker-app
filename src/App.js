import style from './App.module.css';
import React, {useEffect, useState} from 'react';
import {NavBar, Cards, Chart, CountryPicker} from './components';
import { fetchData } from './api';

function App() {
  const [getData, setData] = useState({});
  const country = useState('');

  useEffect(() => {
    async function callAPI(country){
      const response = await fetchData(country);
      setData(response);
    }
    callAPI(country[0]);
    
  }, [country[0]])

  return (
    <div className={style.container}>
      <NavBar />
      <Cards data={getData} />
      <CountryPicker country = {country} />
      <Chart data={getData} country={country[0]}/>
    </div>
  );
}

export default App;
