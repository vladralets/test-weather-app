import React from 'react';

import styles from './TheWeather.module.sass'
import { useSelector } from 'react-redux';

const TheWeather = () => {
  const deg =  useSelector((state) => state.temp.deg);
  const icon = useSelector((state) => state.temp.img);

  return (
    <div className={styles.weather}>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather_icon"/>
      <p>{deg}°C</p>
    </div>
  );
};

export default TheWeather;
