import styles from './TheSlider.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { tempActions } from '../TheWeather/TheWeatherSlice';

const TheSlider = () => {
  const deg =  useSelector((state) => state.temp.deg);
  const [sliderValue, setSliderValue] = useState(deg)

  const dispatch = useDispatch()

  const sliderHandler = (e) => {
    const sliderPoint = e.target.value
    setSliderValue(sliderPoint)
    dispatch(tempActions.changeTemp(sliderValue))
  }

  return (
    <>
      <input
        onChange={sliderHandler}
        value={sliderValue}
        min="-11"
        max="31"
        step="1"
        className={styles.slider}
        type="range"/>
    </>
  );
};

export default TheSlider;
