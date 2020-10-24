import React from "react";

import pbCover from "../assets/pb-cover.jpg";
import pbText from "../assets/pb-text.png";

export default function Cover() {
  return (
    <div className="cover">
      <img className="cover-image" src={pbCover} alt="" />
      <img className="cover-text" src={pbText} alt="" />
    </div>
  );
}
