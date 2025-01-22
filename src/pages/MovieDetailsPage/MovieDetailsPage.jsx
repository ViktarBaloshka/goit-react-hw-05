import { useEffect, useState, useRef } from "react";
import { useLocation, useParams, Outlet, NavLink } from "react-router-dom";
import { fetchMoviesById, BASE_URL_IMAGE } from "../../services/api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();
  const { moviesId } = useParams();
  const [moviesDetailsPage, setMoviesDetailsPage] = useState(null);
  const goBackRef = useRef(location.state);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await fetchMoviesById(moviesId);
        setMoviesDetailsPage(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [moviesId]);

  if (!moviesDetailsPage) return <p>Loading...</p>;

  return (
    <div className={clsx(s.containerDetailsPage)}>
      <NavLink to={goBackRef.current} state={location}>
        Go back
      </NavLink>

      <h2>{moviesDetailsPage.title}</h2>
      <img
        src={`${BASE_URL_IMAGE}${moviesDetailsPage.poster_path}`}
        alt="Movie backdrop"
        className={clsx(s.moviePoster)}
      />
      <div>
        <p className={clsx(s.pDetailsPage)}>
          Rating: {moviesDetailsPage.vote_average.toFixed(2)}
        </p>
        <p className={clsx(s.pDetailsPage)}>
          Duration: {moviesDetailsPage.runtime} m.
        </p>
        <h3>Overview</h3>
        <p>{moviesDetailsPage.overview}</p>
        <h3>Genres</h3>
        <div>
          {moviesDetailsPage.genres.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      </div>
      <div className={clsx(s.navDetailsPage)}>
        <NavLink to="reviews">Reviews</NavLink>
        <NavLink to="cast">Cast</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
