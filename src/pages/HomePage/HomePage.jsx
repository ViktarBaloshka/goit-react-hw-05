import { useState, useEffect } from "react";
import fetchTrendingMovies from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getDataMovies = async () => {
      const results = await fetchTrendingMovies();
      setMovies(results);
    };
    getDataMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
