import { useSelector } from 'react-redux';

import TheWeather from '../TheWeather/TheWeather';
import styles from './BackGround.module.sass'
import { useEffect } from 'react';
import TheSlider from '../TheSlider/TheSlider';
// import { tempToColor } from 'temp-color';

const BackGround = () => {
  const deg =  useSelector((state) => state.temp.deg);

  const calcColour = (temp) => {
    if (temp <= -10 ) return '#00ffff';
    if (temp >= 30 ) return '#ff8c00';
    if (temp < 10 ) {
      const normalise = (temp + 10) / 20;
      return `rgb(${normalise*255}, ${255-(normalise*8)}, ${255-(normalise*255)})`
    }
    const normalise = (temp - 10) / 20;
    return `rgb(255, ${247-(normalise*107)}, 0)`
    // const {r,g,b} = tempToColor(+deg, -9, 29);
    // return `rgb(${r},${g},${b})`;
  }

  useEffect(() => {
    calcColour(deg)
  }, [deg])


  return (
    <div className={styles.background} style={{backgroundColor: calcColour(deg), width: '100%', height: '100vh'}}>
      <TheWeather />
      <TheSlider />
    </div>
  );
};

export default BackGround;
