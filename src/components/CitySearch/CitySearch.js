import { useEffect, useState } from 'react';
import styles from './CitySearch.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityWeather } from '../../store/TheWeatherActions';

const CitySearch = () => {
  const [city, setCity] = useState()

  const cityName =  useSelector((state) => state.temp.city);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setCity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(fetchCityWeather(city))
  }

  useEffect(() => {
    setCity(cityName)
  }, [cityName])

  return (
    <form className={styles.cityForm} onSubmit={submitHandler}>
      <input
        onChange={inputHandler}
        defaultValue={city}
      />
      <button>Get Weather</button>
    </form>
  );
};

export default CitySearch;
