import React from "react";

export default function ShowTemperature() {
  let weatherData = {
    description: "Broken Clouds",
    temperature: 17,
    minTemperature: 16,
    maxTemperarure: 18,
    humidity: 80,
    wind: 5,
  };
  return (
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
              <span id="weather-description">{weatherData.description}</span>
            </p>
          </div>
          <div className="temperature">
            <p>
              <span id="show-temperature">{weatherData.temperature}</span>
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
            <span id="max-temperature">{weatherData.maxTemperarure}º</span>
            <hr />
            <span className="min-temperature" id="min-temperature">
              {weatherData.minTemperature}º
            </span>
          </p>
        </div>
        <div className="col-3 ">
          <ul>
            <li>
              <i className="fas fa-tint"></i>
              <span className="description">Humidity:</span>
              <span id="show-humidity"> {weatherData.humidity}%</span>
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
  );
}
