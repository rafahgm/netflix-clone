import React from "react";
import "./App.scss";
import Cover from "./Cover";

import Footer from "./Footer";

import Slider from "./Slider/Slider";
import Topbar from "./Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Cover />
    </div>
  );
}

export default App;
