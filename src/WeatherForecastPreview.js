import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();

    if (hour < 10) {
      hour = `0${hour}`;
    }
    return `${hour}:00`;
  }

  return (
    <div className="WeatherForecastPreview col-2">
      <h3>{hours()}</h3>
      <WeatherIcon icon={props.data.weather[0].icon} />
      <p>
        {Math.round(props.data.main.temp_max)}º
        <hr />
        <span className="min-temperature">
          {Math.round(props.data.main.temp_min)}º
        </span>
      </p>
    </div>
  );
}
