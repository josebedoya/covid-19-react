import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import covid from './images/image.png';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData());
    };
    fetchAPI();
  }, []);

  const handleCountryChange = async (data) => {
    setData(await fetchData(data));
    setCountry(data);
  };

  if (!data.confirmed) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <img src={covid} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
