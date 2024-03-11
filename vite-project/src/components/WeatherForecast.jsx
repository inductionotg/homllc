import React, { useEffect, useState } from 'react';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data from your API
  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.710283522202744&lon=-74.01042972796357&appid=6027d6315df10893b25cb5b312ddd8c1')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  // Function to filter the weather data for the next 5 hours
  const getWeatherForecastForNext5Hours = (weatherData) => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    const forecastDuration = 5 * 60 * 60;

    if (!weatherData || !weatherData.list) {
      return [];
    }

    const forecast = weatherData.list.filter(item => {
      const itemTimestamp = item.dt;
      return itemTimestamp >= currentTimestamp && itemTimestamp <= currentTimestamp + forecastDuration;
    });

    return forecast;
  };

  // Get the forecast for the next 5 hours
  const forecastForNext5Hours = getWeatherForecastForNext5Hours(weatherData);

  return (
    <div>
      <h2>Weather Forecast for the Next 5 Hours</h2>
      <ul>
        {forecastForNext5Hours.map((item, index) => (
          <li key={index}>
            <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
            {/* Display other relevant information from the forecast item */}
            <p>Temperature: {item.main.temp}°C</p>
            <p>Weather: {item.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
