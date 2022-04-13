import { createSlice } from '@reduxjs/toolkit';

const theWeatherSlice = createSlice({
  name: 'temp',
  initialState: {
    img: '',
    deg: 0,
    city: '',
  },
  reducers: {
    setWeather(state, action) {
      state.img = action.payload.img
      state.deg = Math.round(action.payload.deg - 273)
      state.city = action.payload.city
    },
    changeTemp(state, action) {
      state.deg = action.payload;
    },
    setCityWeather(state, action) {
      state.img = action.payload.img
      state.deg = Math.round(action.payload.deg - 273)
      state.city = action.payload.city
    }
  }
})

export const tempActions = theWeatherSlice.actions

export default theWeatherSlice
