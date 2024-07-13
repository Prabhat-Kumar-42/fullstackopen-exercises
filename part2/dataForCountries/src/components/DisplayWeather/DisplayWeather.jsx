import { useState, useEffect } from "react";
import weatherApiServices from "../../services/weatherApi.services";
import Header from "../Header/Header";

const DisplayWeather = ({ placeName, lat, lon }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const responseData = await weatherApiServices.getWeather(lat, lon);
        setWeatherData(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  if (loading) return <p>Loading weather...</p>;
  if (!weatherData) return null;

  const temp = weatherData.main.temp;
  const windSpeed = weatherData.wind.speed;
  const weatherIconUrl = weatherApiServices.getWeatherIconBaseUrl(
    weatherData.weather[0].icon,
  );
  const weatherDescription = weatherData.weather[0].description;

  const heading = `Weather in ${placeName}`;

  return (
    <div>
      <Header heading={heading} type={2} />
      <p>Weather Description: {weatherDescription}</p>
      <p>Temperature: {temp} °C</p>
      <img src={weatherIconUrl} alt={weatherDescription} />
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default DisplayWeather;
