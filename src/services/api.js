const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
// https://www.themoviedb.org/

const fetchMovies = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Request failed: " + response.status);
  const data = await response.json();
  return data.results ?? [];
};

export const getPopularMovies = () =>
  fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  fetchMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
