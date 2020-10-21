import React, { useState } from "react";
import SliderItem from "./SilderItem";
import SliderControl from "./SliderControl";

import "../style/Slider/Slider.scss";

type SliderProps = {
  movies: Movie[];
};

const Slider: React.FC<SliderProps> = ({ movies }: SliderProps) => {
  const [hasMoved, setHasMoved] = useState(false);
  const [moveDirection, setMoveDirection] = useState("");
  const [isMoving, setIsMoving] = useState(false);
  const [movePercentage, setMovePercentage] = useState(0);
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0);
  const [itemsRow, setItemsRow] = useState(6);

  const renderContent = () => {
    console.log(lowestVisibleIndex);
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

    console.log("Left", left);
    console.log("Center", center);
    console.log("Right", right);

    const combinedIndex = [...left, ...center, ...right];
    console.log("Combined Index", combinedIndex);

    if (hasMoved) {
      const trailingIndex =
        combinedIndex[combinedIndex.length - 1] === totalItems - 1
          ? 0
          : combinedIndex[combinedIndex.length - 1] + 1;
      combinedIndex.push(trailingIndex);
    }

    const sliderContent = [];

    for (let index of combinedIndex) {
      sliderContent.push(
        <SliderItem key={index} movie={movies[index]} width={100 / itemsRow} />
      );
    }

    if (!hasMoved) {
      for (let i = 0; i < itemsRow; i++) {
        sliderContent.unshift(
          <div
            key={i + 100}
            className="slider-item"
            style={{ width: `${100 / itemsRow}%` }}
          ></div>
        );
      }
    }

    return sliderContent;
  };

  const handleNext = () => {
    const totalItems = movies.length;

    let newIndex: number;
    if (lowestVisibleIndex === totalItems - itemsRow) {
      newIndex = 0;
    } else if (lowestVisibleIndex + itemsRow > totalItems - itemsRow) {
      newIndex = totalItems - itemsRow;
    } else {
      newIndex = lowestVisibleIndex + itemsRow;
    }

    let newMovePercentage;
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsRow) * 100;
    } else {
      newMovePercentage = 100;
    }

    setIsMoving(true);
    setMoveDirection("right");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setIsMoving(false);
      setMoveDirection("");
      setMovePercentage(0);
    }, 750);

    if (!hasMoved) setHasMoved(true);
  };

  const handlePrev = () => {
    const totalItems = movies.length;
    let newIndex: number;
    if (lowestVisibleIndex < itemsRow && lowestVisibleIndex !== 0) {
      newIndex = 0;
    } else if (lowestVisibleIndex - itemsRow < 0) {
      newIndex = totalItems - itemsRow;
    } else {
      newIndex = lowestVisibleIndex - itemsRow;
    }

    let newMovePercentage;
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0;
    } else if (lowestVisibleIndex - newIndex < itemsRow) {
      newMovePercentage =
        ((itemsRow - (lowestVisibleIndex - newIndex)) / itemsRow) * 100;
    } else {
      newMovePercentage = 0;
    }

    setIsMoving(true);
    setMoveDirection("left");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setIsMoving(false);
      setMoveDirection("");
      setMovePercentage(0);
    }, 750);
  };
  return (
    <div className="slider">
      {hasMoved && <SliderControl arrowDirection="left" onClick={handlePrev} />}
      {movies.length > 0 && (
        <div className="slider-content">{renderContent()}</div>
      )}
      <SliderControl arrowDirection="right" onClick={handleNext} />
    </div>
  );
};

export default Slider;
