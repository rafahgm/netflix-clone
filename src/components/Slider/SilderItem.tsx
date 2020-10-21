import React from "react";

import "../style/Slider/SliderItem.scss";

type SliderItemProps = {
  movie: Movie;
  width: number;
};

const SliderItem: React.FC<SliderItemProps> = ({
  movie,
  width,
}: SliderItemProps) => {
  return (
    <div className="slider-item" style={{ width: `${width}%` }}>
      <img
        className="slider-image"
        src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default SliderItem;
