import React, { useState } from "react";
import SliderItem from "./SilderItem";
import SliderControl from "./SliderControl";

import "../style/Slider/Slider.scss";

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
    let totalItems = movies.length;

    const left = [];
    const center = [];
    const right = [];

    for (let i = 0; i < itemsRow; i++) {
      // left
      if (hasMoved) {
        if (lowestVisibleIndex + i - itemsRow < 0) {
          left.push(totalItems - itemsRow + lowestVisibleIndex + i);
        } else {
          left.push(lowestVisibleIndex + i - itemsRow);
        }
      }

      // center
      if (i + lowestVisibleIndex >= totalItems) {
        center.push(i + lowestVisibleIndex - totalItems);
      } else {
        center.push(i + lowestVisibleIndex);
      }

      // right
      if (i + lowestVisibleIndex + itemsRow >= totalItems) {
        right.push(i + lowestVisibleIndex + itemsRow - totalItems);
      } else {
        right.push(i + lowestVisibleIndex + itemsRow);
      }
    }

    const combinedIndex = [...left, ...center, ...right];
    const sliderContent = [];

    if (movies.length > 0) {
      for (let index of combinedIndex) {
        sliderContent.push(
          <SliderItem
            key={index}
            movie={movies[index]}
            width={100 / itemsRow}
          />
        );
      }
    }

    return sliderContent;
  };

  const handleClick = () => {};

  return (
    <div className="slider">
      {hasMoved && (
        <SliderControl arrowDirection="left" onClick={handleClick} />
      )}
      {/* TODO: Make sure that renderContent is called when the fetch has ended */}
      <div className="slider-content">{renderContent()}</div>
      <SliderControl arrowDirection="right" onClick={handleClick} />
    </div>
  );
};

export default Slider;
