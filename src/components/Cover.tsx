import React from "react";

import pbCover from "../assets/pb-cover.jpg";
import pbText from "../assets/pb-text.png";

export default function Cover() {
  return (
    <div className="cover">
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${pbCover})` }}
      ></div>
      <img className="cover-text" src={pbText} alt="" />
    </div>
  );
}
