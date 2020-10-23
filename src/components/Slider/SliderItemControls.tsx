import React from "react";

import { Icon } from "@iconify/react";
import playIcon from "@iconify/icons-mdi/play";
import plusIcon from "@iconify/icons-mdi/plus";
import thumbUpOutline from "@iconify/icons-mdi/thumb-up-outline";
import thumbDownOutline from "@iconify/icons-mdi/thumb-down-outline";
import chevronDown from "@iconify/icons-mdi/chevron-down";

import "../style/Slider/SliderItemControls.scss";

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
      <div className="sic-info">{`${movie.vote_average * 10}% Match`}</div>
      <div className="sic-genres"></div>
    </div>
  );
}
