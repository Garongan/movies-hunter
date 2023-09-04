/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getMovieList, searchMovie } from "./components/TmdbApi";
import "./App.css";
import { useState } from "react";
import PopularMovieList from "./components/PopularMovieList";

const MovieContainer = ({ popularMovies }) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 500);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`movie-container ${shouldAnimate ? "" : "animate"}`}>
      <PopularMovieList popularMovies={popularMovies} />
    </div>
  );
};

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

  return (
    <>
      <div className="header">
        <h1>Movies Hunter</h1>
        <div className="title-content-wrapper">
          <TitleContent />
          <input
            type="text"
            placeholder="🔍 Search Movies..."
            className="movie-search"
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>

      <div className="app">
        <MovieContainer popularMovies={popularMovies} />
      </div>

      <div className="footer">
        Copyright 2023 @alvindotri
      </div>
    </>
  );
};

export default App;
