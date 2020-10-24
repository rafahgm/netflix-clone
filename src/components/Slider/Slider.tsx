//TODO: Fix array so it can display lengths that are not multiples of showSize, maybe temporaly copy first items to end of array

import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderItem from "./SilderItem";
import SliderControl from "./SliderControl";
import { shiftLeft, shiftRight } from "../../util/arrays";
import { tmdbKey } from "../../util/tmdb.apikey";

import "./Slider.scss";
import { isTemplateExpression } from "typescript";

type SliderProps = {
  title: string;
};

type SliderState = {
  hasMoved: boolean;
  moveDirection: string;
  isMoving: boolean;
  movePercentage: number;
  leftIndex: number;
  showSize: number;
  indexes: number[];
  itemWidth: number;
  movies: Movie[];
};

function Slider({ title }: SliderProps) {
  const [state, setState] = useState<SliderState>({
    hasMoved: false,
    moveDirection: "",
    isMoving: false,
    movePercentage: 0,
    leftIndex: 0,
    showSize: 7,
    indexes: [],
    itemWidth: 0,
    movies: [],
  });

  function updateState(newState: any) {
    setState({ ...state, ...newState });
  }

  useEffect(function () {
    function formatMovie(movie: any): Movie {
      return {
        id: movie.id,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        vote_average: movie.vote_average,
      };
    }

    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}`)
      .then((response) => {
        let result = response.data.results;
        result = result.map((movie: any) => formatMovie(movie));
        let indexes: number[] = [];
        result.forEach((movie: any, index: number) => {
          indexes.push(index);
        });
        let itemWidth = window.innerWidth / (state.showSize + 1);
        updateState({ movies: result, indexes: indexes, itemWidth: itemWidth });
      })
      .catch((err) => console.log(err));
  }, []);

  const renderContent = () => {
    const sliderContent = [];

    for (let index of state.indexes) {
      sliderContent.push(
        <SliderItem
          key={index}
          movie={state.movies[index]}
          width={state.itemWidth}
          text={index.toString()}
        />
      );
    }

    return sliderContent;
  };

  const handleNext = () => {
    if (state.hasMoved) {
      updateState({
        isMoving: true,
        moveDirection: "right",
      });

      setTimeout(() => {
        updateState({
          indexes: shiftLeft(state.indexes, state.showSize),
          isMoving: false,
          hasMoved: true,
        });
      }, 750);
    } else {
      updateState({
        isMoving: true,
        moveDirection: "right",
      });

      setTimeout(() => {
        updateState({
          isMoving: false,
          hasMoved: true,
        });
      }, 750);
    }
  };

  const handlePrev = () => {
    updateState({
      // indexes: shiftRight(state.indexes, state.showSize),
      isMoving: true,
      moveDirection: "left",
    });

    setTimeout(() => {
      updateState({
        indexes: shiftRight(state.indexes, state.showSize),
        isMoving: false,
      });
    }, 750);
  };

  let style: React.CSSProperties = {
    marginLeft: `${state.itemWidth / 2}px`,
  };
  if (state.hasMoved) {
    style = {
      transform: `translateX(-${
        state.showSize * state.itemWidth - state.itemWidth / 2
      }px)`,
    };
  }
  if (state.isMoving) {
    // After first click to next
    if (state.hasMoved) {
      let translate = "";
      if (state.moveDirection === "right") {
        translate = `translateX(-${
          state.showSize * state.itemWidth * 2 - state.itemWidth / 2
        }px)`;
      }
      style = {
        transform: translate,
        transition: "all 750ms ease-in-out",
      };
    } else {
      // Before clicking to next
      // i.e. there still is a margin to the left
      let translate = "";
      if (state.moveDirection === "right") {
        translate = `translateX(-${
          state.showSize * state.itemWidth - state.itemWidth / 2
        }px)`;
      }
      style = {
        transform: translate,
        transition: "all 750ms ease-in-out",
      };
    }
  }

  return (
    <div className="slider">
      <span className="slider-title">{title}</span>
      {state.hasMoved && (
        <SliderControl arrowDirection="left" onClick={handlePrev} />
      )}
      <div className="slider-content" style={style}>
        {renderContent()}
      </div>
      <SliderControl arrowDirection="right" onClick={handleNext} />
    </div>
  );
}

export default Slider;
