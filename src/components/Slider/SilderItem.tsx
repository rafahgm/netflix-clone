import React, { useState } from "react";

import "./SliderItem.scss";
import SliderItemControls from "./SliderItemControls";

type SliderItemProps = {
  movie: Movie;
  width: number;
  text: string;
};

export default function SliderItem({ movie, width, text }: SliderItemProps) {
  const [isHovered, setHovered] = useState(false);
  const [isAbove, setAbove] = useState(false);
  let hoverTimeout: NodeJS.Timeout;
  let controlsStyle: React.CSSProperties = {
    transition: "all 300ms ease-in-out",
    opacity: "0",
  };
  let itemStyle: React.CSSProperties = {};
  function handleMouseEnter() {
    hoverTimeout = setTimeout(() => {
      setHovered(true);
      setAbove(true);
    }, 750);
  }
  function handleMouseLeave() {
    clearTimeout(hoverTimeout);
    setHovered(false);
    setTimeout(() => {
      setAbove(false);
    }, 750);
  }

  if (isHovered) {
    itemStyle = {
      transform: "scale(1.5)",
    };
    controlsStyle = {
      ...controlsStyle,
      opacity: "1",
    };
  }

  if (isAbove) {
    itemStyle = {
      ...itemStyle,
      zIndex: 10,
    };
  }

  return (
    <div
      className="slider-item"
      style={{ ...itemStyle, width: `${width}px` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-item-overlay">
        <span>{text}</span>
      </div>
      <img
        className="slider-item-image"
        src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div style={controlsStyle}>
        <SliderItemControls movie={movie} />
      </div>
    </div>
  );
}
