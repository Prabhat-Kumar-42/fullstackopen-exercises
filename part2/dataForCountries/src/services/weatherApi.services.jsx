import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherIconBaseUrl = (iconId) => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};

const getWeather = (lat, lon) => {
  const params = {
    lat,
    lon,
    appid: API_KEY,
    units: "metric",
  };
  const request = axios.get(baseUrl, { params });
  return request.then((response) => response.data);
};

export default {
  getWeather,
  getWeatherIconBaseUrl,
};
