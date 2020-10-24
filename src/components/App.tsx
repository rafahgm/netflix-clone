import React from "react";
import "./App.scss";
import Cover from "./Cover";

import "./Cover.scss";

import Slider from "./Slider/Slider";
import Topbar from "./Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Cover />
      <Topbar />
      <div className="content">
        <Slider />
      </div>
    </div>
  );
}

export default App;
