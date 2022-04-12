import { configureStore } from '@reduxjs/toolkit';
import theWeatherSlice from '../components/TheWeather/TheWeatherSlice';

const store = configureStore({
  reducer: {
    temp: theWeatherSlice.reducer,
  }
})

export default store;
