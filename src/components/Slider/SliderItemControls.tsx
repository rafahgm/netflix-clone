import React, { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-mdi/play";
import plusIcon from "@iconify/icons-mdi/plus";
import thumbUpOutline from "@iconify/icons-mdi/thumb-up-outline";
import thumbDownOutline from "@iconify/icons-mdi/thumb-down-outline";
import chevronDown from "@iconify/icons-mdi/chevron-down";
import axios from "axios";

import rating18 from "../../assets/18.png";
import rating16 from "../../assets/16.png";
import rating14 from "../../assets/14.png";
import rating12 from "../../assets/12.png";
import "../style/Slider/SliderItemControls.scss";

const ratings = [rating12, rating14, rating16, rating18];

type SliderItemControlsProps = {
  movie: Movie;
};

export default function SliderItemControls({ movie }: SliderItemControlsProps) {
  return (
    <div className="sic">
      <div className="sic-buttons">
        <div className="sic-button play-button">
          <Icon icon={playIcon} />
        </div>
        <div className="sic-button">
          <Icon icon={plusIcon} />
        </div>
        <div className="sic-button">
          <Icon icon={thumbUpOutline} />
        </div>
        <div className="sic-button">
          <Icon icon={thumbDownOutline} />
        </div>
        <div className="sic-button">
          <Icon icon={chevronDown} />
        </div>
      </div>
      <div className="sic-info">
        <span>{`${movie.vote_average * 10}% Match`}</span>
        <img src={ratings[Math.floor(Math.random() * 4)]} alt="" />
        <span className="duration">
          {Math.floor(Math.random() * 3)}h&nbsp;
          {Math.floor(Math.random() * 60)}
          min
        </span>
      </div>
      <div className="sic-genres">
        {/* TODO: Implement genres as a global context so just one call to the api is made */}
      </div>
    </div>
  );
}
