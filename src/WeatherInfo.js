import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="DisplayTime">
        <h1>{props.data.city}</h1>
        <h2>
          <DisplayDate date={props.data.date} />
        </h2>
      </div>
      <div className="ShowTemperature">
        <div className="row">
          <div className="col-6">
            <div className="weather">
              <p>
                <WeatherIcon icon={props.data.icon} />
                <span id="weather-description">{props.data.description}</span>
              </p>
            </div>
            <div className="temperature">
              <p>
                <UnitConversion celsius={props.data.temperature} />
              </p>
            </div>
          </div>
          <div className="col-3  min-max-temperature">
            <p>
              <span id="max-temperature">{props.data.maxTempertaure}º</span>
              <hr />
              <span className="min-temperature" id="min-temperature">
                {props.data.minTempertaure}º
              </span>
            </p>
          </div>
          <div className="col-3 ">
            <ul>
              <li>
                <i className="fas fa-tint"></i>
                <span className="description">Humidity:</span>
                <span id="show-humidity"> {props.data.humidity} %</span>
              </li>
              <li>
                <i className="fas fa-wind"></i>
                <span className="description wind">Wind:</span>
                <span id="show-wind"> {props.data.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Forecast city={props.data.city} />
    </div>
  );
}
