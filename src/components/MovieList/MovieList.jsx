import { useLocation, NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((item) => (
          <li key={item.id} className={clsx(s.liMovieList)}>
            <NavLink
              to={`/movies/${item.id.toString()}`}
              state={location}
              className={clsx(s.navLinkMovieList)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
