import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [weatherData, setWeatherData] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleSubmit() {}
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
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
            <button className="btn btn-primary secondary">
              <span role="img" aria-label="location">
                📍
              </span>
              Current Location
            </button>
          </div>
        </form>
        <div className="DisplayTime">
          <h1>{city}</h1>
          <h2>Wednesday, 13:00</h2>
        </div>
        <div className="ShowTemperature">
          <div className="row">
            <div className="col-6">
              <div className="weather">
                <p>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    id="icon"
                    alt={weatherData.description}
                  />
                  <span id="weather-description">
                    {weatherData.description}
                  </span>
                </p>
              </div>
              <div className="temperature">
                <p>
                  <span id="show-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span id="celsius-temperature" className="active">
                    °C
                  </span>
                  <span className="convert-temperature"> |</span>
                  <span id="fahrenheit-temperature">°F</span>
                </p>
              </div>
            </div>
            <div className="col-3  min-max-temperature">
              <p>
                <span id="max-temperature">{weatherData.maxTempertaure}º</span>
                <hr />
                <span className="min-temperature" id="min-temperature">
                  {weatherData.minTempertaure}º
                </span>
              </p>
            </div>
            <div className="col-3 ">
              <ul>
                <li>
                  <i className="fas fa-tint"></i>
                  <span className="description">Humidity:</span>
                  <span id="show-humidity"> {weatherData.humidity} %</span>
                </li>
                <li>
                  <i className="fas fa-wind"></i>
                  <span className="description wind">Wind:</span>
                  <span id="show-wind"> {weatherData.wind}km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6c3b1017063f8a3764595f3d1af14037";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
