import { Routes, Route } from "react-router-dom";
import "./App.modal.css";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MoviesDetailsPage />} />
        {/* <Route path="/movies/:movieId/cast" element={<MovieCast />}>
            <Route
              path="/movies/:movieId/reviews"
              element={<MovieReviews />}
            ></Route>
          </Route>
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
