import React from "react";
import "./App.scss";

import Slider from "./Slider/Slider";
import Topbar from "./Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Slider />
    </div>
  );
}

export default App;
