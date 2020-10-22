import React, { useState } from "react";
import SliderItem from "./SilderItem";
import SliderControl from "./SliderControl";
import useWindowDimensions from "../../util/windowDimensions";

import "../style/Slider/Slider.scss";

type SliderProps = {
  movies: Movie[];
};

type SliderState = {
  hasMoved: boolean;
  moveDirection: string;
  isMoving: boolean;
  movePercentage: number;
  leftIndex: number;
  showSize: number;
};

const Slider: React.FC<SliderProps> = ({ movies }: SliderProps) => {
  const [state, setState] = useState<SliderState>({
    hasMoved: false,
    moveDirection: "",
    isMoving: false,
    movePercentage: 0,
    leftIndex: 0,
    showSize: 4,
  });

  const windowDimensions = useWindowDimensions();

  const updateState = (newState: any) => {
    setState({ ...state, ...newState });
  };

  if (!movies.length) return null;

  let totalItems = movies.length;

  const renderContent = () => {
    console.log("Render");

    const left: number[] = [];
    const center: number[] = [];
    const right: number[] = [];

    let hasMoved = state.hasMoved;
    let leftIndex = state.leftIndex;
    let showSize = state.showSize;

    for (let i = 0; i < showSize; i++) {
      //left
      if (hasMoved) {
        if (leftIndex === 0) {
          left.push(showSize * 2 + i);
        }
        left.push(leftIndex - showSize + i);
      }

      // TODO: Resolver probelema de quando o número de itens não for multiplo do número de itens na tela
      //center
      center.push(leftIndex + i);

      //right
      console.log(leftIndex + showSize);
      if (leftIndex + showSize >= totalItems) {
        right.push(i);
      } else {
        right.push(leftIndex + showSize + i);
      }
    }

    console.log("Left", left);
    console.log("Center", center);
    console.log("Right", right);

    const combinedIndex: number[] = [...left, ...center, ...right];

    const sliderContent = [];

    for (let index of combinedIndex) {
      sliderContent.push(
        <SliderItem
          key={index}
          movie={movies[index]}
          width={100 / state.showSize}
          text={index.toString()}
        />
      );
    }

    return sliderContent;
  };

  const handleNext = () => {
    updateState({
      leftIndex: state.leftIndex + state.showSize,
      hasMoved: true,
    });
  };

  const handlePrev = () => {};

  let style: React.CSSProperties = {};

  if (state.hasMoved) {
    style = {
      transform: `translateX(-${window.innerWidth}px)`,
    };
  }

  return (
    <div className="slider">
      {state.hasMoved && (
        <SliderControl arrowDirection="left" onClick={handlePrev} />
      )}
      <div className="slider-content" style={style}>
        {renderContent()}
      </div>
      <SliderControl arrowDirection="right" onClick={handleNext} />
    </div>
  );
};

export default Slider;
