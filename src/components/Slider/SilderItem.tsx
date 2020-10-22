import React from "react";

import "../style/Slider/SliderItem.scss";

type SliderItemProps = {
  movie: Movie;
  width: number;
  text: string;
};

const SliderItem: React.FC<SliderItemProps> = ({
  movie,
  width,
  text,
}: SliderItemProps) => {
  return (
    <div className="slider-item" style={{ width: `${width}%` }}>
      <div className="slider-item-overlay">
        <span>{text}</span>
      </div>
      <img
        className="slider-item-image"
        src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default SliderItem;
