import axios from 'axios';
import { tempActions } from './TheWeatherSlice';

const key = '72a15cc46bc81e06a0739bfe8356c582'

export const fetchWeatherData = (lat, long) => {
  return async (dispatch) => {
    const fetchWeather = async () => {
      return axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
    }

    try {
      const weather = await fetchWeather();
      dispatch(tempActions.setWeather({
        img: weather.data.weather[0].icon,
        deg: weather.data.main.temp,
      }))
    } catch (error) {
      console.log(error)
    }
  }
}
