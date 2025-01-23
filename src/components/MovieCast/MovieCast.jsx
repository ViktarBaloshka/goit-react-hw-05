import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL_IMAGE, fetchMoviesCast } from "../../services/api";
import clsx from "clsx";
import s from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMoviesCast(moviesId);
        setCasts(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getCast();
  }, [moviesId]);
  if (!casts) return <p>Loading...</p>;
  return (
    <div className={clsx(s.containerMovieCast)}>
      <ul>
        {casts.map((item) => (
          <li key={item.id}>
            <img
              src={`${BASE_URL_IMAGE}${item.profile_path}`}
              alt={item.name}
              className={clsx(s.img)}
            />
            <p>
              <strong>Actor: </strong>
              {item.name}
            </p>
            <p>
              <strong>Role:</strong> {item.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
