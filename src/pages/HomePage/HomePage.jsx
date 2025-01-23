import { useState, useEffect } from "react";
import fetchTrendingMovies from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import clsx from "clsx";
import s from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getDataMovies = async () => {
      const results = await fetchTrendingMovies();
      setMovies(results);
    };
    getDataMovies();
  }, []);
  if (!movies) return <p>Loading...</p>;
  return (
    <>
      <h2 className={clsx(s.titleHomePage)}>Trending today</h2>
      <MovieList movies={movies} />
    </>
  );
}
