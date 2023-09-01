import axios from "axios";
const apiPopularMovieListURL = `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;

export const getMovieList = async () => {
  const movie = await axios.get(apiPopularMovieListURL);
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(query);
  return;
};
