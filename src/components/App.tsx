import React, { useEffect, useState } from "react";
import "./style/App.scss";
import { tmdbKey } from "../util/tmdb.apikey";
import Slider from "./Slider/Slider";

function formatMovie(movie: any): Movie {
  return {
    id: movie.id,
    title: movie.title,
    backdrop_path: movie.backdrop_path,
  };
}

function App() {
  let [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKey}`
    ).then((res) => {
      res.json().then((data) => {
        let movies = data.results.map((movie: any) => formatMovie(movie));
        console.log(data.results);
        setMovies(movies);
      });
    });
  }, []);

  return (
    <div className="App">
      <Slider movies={movies} />
    </div>
  );
}

export default App;
