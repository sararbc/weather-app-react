import React from "react";

export default function DisplayTime() {
  let weatherData = {
    city: "Paris",
    date: "Sunday, 18:51",
  };
  return (
    <div className="DisplayTime">
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.date}</h2>
    </div>
  );
}
