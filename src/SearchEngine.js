import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function SearchEngine(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "6c3b1017063f8a3764595f3d1af14037";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handlePosition(position) {
    const apiKey = "6c3b1017063f8a3764595f3d1af14037";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }
  function activeLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      maxTempertaure: Math.round(response.data.main.temp_max),
      minTempertaure: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form className="SearchEngine" onSubmit={handleSubmit}>
          <div className="form-group justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search city"
              onChange={updateCity}
            />
            <span>
              <input type="submit" value="Search" className="btn btn-primary" />
            </span>
            <button
              className="btn btn-primary secondary"
              onClick={activeLocation}
            >
              <span role="img" aria-label="location">
                📍
              </span>
              Current Location
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
