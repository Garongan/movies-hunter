import { useEffect } from "react";
import { getMovieList, searchMovie } from "./api";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [titleName, setTitleName] = useState("Popular Movie Lists");

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (query) => {
    if (query.length > 3) {
      const search = await searchMovie(query);
      setPopularMovies(search.results);
      setTitleName("Search Results");
    }
  };

  const TitleContent = () => {
    return <h2 className="title-content">{titleName}</h2>;
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, index) => {
      return (
        <div className="movie-wrapper" key={index}>
          <div className="image-container">
            <img
              className="movie-image"
              src={`${import.meta.env.VITE_BASEIMAGEURL}${movie.poster_path}`}
              alt="Movie Poster"
            />
          </div>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-date">Release date: {movie.release_date}</div>
          <div className="movie-rating">Rating: {movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Movies Hunter</h1>
          <div className="title-content-wrapper">
            <TitleContent />
            <input
              type="text"
              placeholder="Search Movies"
              className="movie-search"
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <div className="movie-container">
            <PopularMovieList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
