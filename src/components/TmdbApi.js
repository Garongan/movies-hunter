import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async (query) => {
  const search = await axios.get(`${baseURL}/search/movie?query=${query}&api_key=${apiKey}`);
  return search.data;
};
