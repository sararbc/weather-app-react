import React, { useState } from "react";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelcius() {
    return props.celcius;
  }

  function convertFahrenheit() {
    return Math.round(props.celcius * (9 / 5) + 32);
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="UnitConversion">
        <span id="show-temperature">{Math.round(props.celcius)}</span>
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
        <span id="celsius-temperature" className="active">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
        </span>
        <span className="convert-temperature"> |</span>
        <span id="fahrenheit-temperature">°F</span>
      </div>
    );
  }
}
