import axios from "axios";

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
