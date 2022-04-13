import './App.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { fetchWeatherData } from './store/TheWeatherActions';
import { useDispatch } from 'react-redux';
import BackGround from './components/BackGround/BackGround';

function App() {
  const [positionPermission, setPositionPermission] = useState('waiting');
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

  return (
    <div className="App">
      {positionPermission === 'accepted' && <p>Please enable location for this site in your browser</p>}
      {positionPermission === 'accepted' && <BackGround/>}
      {positionPermission === 'denied' && <p>Geolocation is not enabled</p>}
    </div>
  );
}

export default App;
