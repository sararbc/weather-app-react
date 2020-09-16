import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchEngine />
      <Forecast />
    </div>
  );
}

export default App;
