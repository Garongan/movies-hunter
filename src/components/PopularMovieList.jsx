const PopularMovieList = ({ popularMovies }) => {
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

export default PopularMovieList;
