import React, { useState } from "react";
import "./App.css";

const App = () => {
  const apiKey = "f281294ad11a241c301ce2e3afabaf6f";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter")
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to Weather App! Enter in a city to get the weather. </p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};
export default App;
