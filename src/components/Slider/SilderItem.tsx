import React from "react";

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
      {movie.title}
    </div>
  );
};

export default SliderItem;
