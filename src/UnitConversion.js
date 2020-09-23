import React, { useState } from "react";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertFahrenheit() {
    return Math.round(props.celsius * (9 / 5) + 32);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span id="show-temperature">{Math.round(props.celsius)}</span>
        <span id="celsius-temperature" className="active">
          °C
        </span>
        <span className="convert-temperature"> |</span>
        <span id="fahrenheit-temperature">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <span id="show-temperature">{convertFahrenheit()}</span>
        <span id="celsius-temperature">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
        <span className="convert-temperature"> |</span>
        <span id="fahrenheit-temperature" className="active">
          °F
        </span>
      </div>
    );
  }
}
