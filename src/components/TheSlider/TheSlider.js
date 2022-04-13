import styles from './TheSlider.module.sass'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { tempActions } from '../../store/TheWeatherSlice';

const TheSlider = () => {
  const deg =  useSelector((state) => state.temp.deg);
  const [sliderValue, setSliderValue] = useState(0)

  const dispatch = useDispatch()

  const sliderHandler = (e) => {
    const sliderPoint = e.target.value
    setSliderValue(sliderPoint)
    dispatch(tempActions.changeTemp(sliderValue))
  }

  useEffect(() => {
    setSliderValue(deg)
  }, [deg])

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
