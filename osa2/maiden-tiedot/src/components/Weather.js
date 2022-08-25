import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  const [iconSrc, setIconSrc] = useState('');

  let country = props.country;
  let lat = country.latlng[0];
  let lng = country.latlng[1];
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const result = await axios.get(
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${api_key}&include=minutely`
    );
    setWeather(result.data.data[0]);
    setIconSrc(
      `https://www.weatherbit.io/static/img/icons/${result.data.data[0].weather.icon}.png`
    );
  };

  return (
    <div>
      <h2>Weather in {country.capital[0]}</h2>
      <p>temperature {weather.app_temp} Celsius</p>
      <img src={iconSrc} alt='weather'></img>
      <p>wind {weather.wind_spd} m/s</p>
    </div>
  );
};

export default Weather;
