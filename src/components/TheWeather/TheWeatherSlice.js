import { createSlice } from '@reduxjs/toolkit';

const theWeatherSlice = createSlice({
  name: 'temp',
  initialState: {
    img: '',
    deg: 0,
  },
  reducers: {
    setWeather(state, action) {
      state.img = action.payload.img
      state.deg = Math.round(action.payload.deg - 273)
    },
    changeTemp(state, action) {
      state.deg = action.payload;
    }
  }
})

export const tempActions = theWeatherSlice.actions

export default theWeatherSlice
