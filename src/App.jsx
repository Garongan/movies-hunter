import { useEffect } from "react";
import { getMovieList, searchMovie } from "./api";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = (query) => {
    console.log(query);
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, index) => {
      return (
        <div className="movie-wrapper" key={index}>
          <img
            className="movie-image"
            src={`${import.meta.env.VITE_BASEIMAGEURL}${movie.poster_path}`}
            alt="Movie Poster"
          />
          <div className="movie-title">{movie.title}</div>
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-rating">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Movies Hunter</h1>
          <input
            type="text"
            placeholder="Search Movies"
            className="movie-search"
            onChange={(e) => search(e.target.value)}
          />
          <div className="movie-container">
            <PopularMovieList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
