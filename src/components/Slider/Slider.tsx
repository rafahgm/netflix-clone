import React, { useState } from "react";
import SliderItem from "./SilderItem";
import SliderControl from "./SliderControl";

type SliderProps = {
  movies: Movie[];
};

const Slider: React.FC<SliderProps> = ({ movies }: SliderProps) => {
  const [hasMoved, setHasMoved] = useState(false);
  const [moveDirection, setMoveDirection] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [movePercentage, setMovePercentage] = useState(0);
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0);
  const [itemsRow, setItemsRow] = useState(6);

  const renderContent = () => {
    const sliderContent = [];
    for (let movie of movies) {
      sliderContent.push(
        <SliderItem key={movie.id} movie={movie} width={100 / itemsRow} />
      );
    }

    return sliderContent;
  };

  const handleClick = () => {};

  return (
    <div className="slider">
      {hasMoved && (
        <SliderControl arrowDirection="left" onClick={handleClick} />
      )}
      <div className="slider-content">{renderContent()}</div>
      <SliderControl arrowDirection="right" onClick={handleClick} />
    </div>
  );
};

export default Slider;
