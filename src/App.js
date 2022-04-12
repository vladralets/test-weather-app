import './App.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { fetchWeatherData } from './components/TheWeather/TheWeatherActions';
import { useDispatch } from 'react-redux';
import BackGround from './components/BackGround/BackGround';

function App() {
  const [positionPermission, setPositionPermission] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setPositionPermission('accepted')
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      function (error) {
        console.error('Error Code = ' + error.code + ' - ' + error.message);

        setPositionPermission('denied')
      }
    )
  }, [])

  useEffect(() => {
    dispatch(fetchWeatherData(latitude, longitude))
  }, [dispatch, latitude, longitude]);

  let permissionContent = <p>Please enable location for this site in your browser</p>
  if (positionPermission === 'accepted') {
    permissionContent = <BackGround />
  } else {
    permissionContent = <p>Geolocation is not enabled</p>
  }

  return (
    <div className="App">
      {permissionContent}
    </div>
  );
}

export default App;
