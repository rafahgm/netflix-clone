import React from "react";
import "./App.scss";
import Cover from "./Cover";

import "./Cover.scss";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
}

export default App;
