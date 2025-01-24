import axios from "axios";

export const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_TOKEN = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzlhYTlhZTZhNDU1NzU3ODQ1YWU5MTVhOTY1MGMwMiIsIm5iZiI6MTczNzQ3Nzg2OC40NTksInN1YiI6IjY3OGZjZWVjNzcxOGQxZTg5OGFhYmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLFb3I2ygFsLgEArDOg-GaEsr3toOGwWIQp2LkAEMzk`;

const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};

export default async function fetchTrendingMovies() {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return data.results;
}

export async function fetchMoviesById(moviesId) {
  const { data } = await axios.get(
    `/movie/${moviesId}?language=en-US`,
    options
  );
  return data;
}

export async function fetchMoviesCast(moviesId) {
  const { data } = await axios.get(
    `/movie/${moviesId}/credits?language=en-US`,
    options
  );
  return data.cast;
}
export async function fetchMoviesReviews(moviesId) {
  const { data } = await axios.get(
    `/movie/${moviesId}/reviews?language=en-US`,
    options
  );
  return data.results;
}

export async function fetchSearchMovie(query) {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data.results;
}
