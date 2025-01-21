import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const activePage = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink className={activePage} to="/">
        Home
      </NavLink>
      <NavLink className={activePage} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
