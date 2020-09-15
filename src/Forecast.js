import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <h3>19:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            18º
            <hr />
            <span className="min-temperature"> 18º</span>
          </p>
        </div>
        <div className="col-2">
          <h3>22:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            16º
            <hr />
            <span className="min-temperature">16º</span>
          </p>
        </div>
        <div className="col-2">
          <h3>01:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            14º
            <hr />
            <span className="min-temperature">14º</span>
          </p>
        </div>
        <div className="col-2">
          <h3>04:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            13º
            <hr />
            <span className="min-temperature">13º</span>
          </p>
        </div>
        <div className="col-2">
          <h3>07:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            13º
            <hr />
            <span className="min-temperature">13º</span>
          </p>
        </div>
        <div className="col-2">
          <h3>10:00</h3>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="broken-clouds"
          />
          <p>
            16º
            <hr />
            <span className="min-temperature">16º</span>
          </p>
        </div>
      </div>
    </div>
  );
}
