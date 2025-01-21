import { useLocation, NavLink } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <NavLink to={item.id.toString()} state={location}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
