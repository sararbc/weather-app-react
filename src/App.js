import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchEngine from "./SearchEngine";
import DisplayTime from "./DisplayTime";
import ShowTemperature from "./ShowTemperature";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchEngine />
      <DisplayTime />
      <ShowTemperature />
      <Forecast />
    </div>
  );
}

export default App;
