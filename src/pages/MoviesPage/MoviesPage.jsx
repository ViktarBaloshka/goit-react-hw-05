import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleSubmit = ({ query, resetForm }) => {
    handleChangeQuery(query);
    resetForm();
  };

  const handleChangeQuery = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getDataSearchMovies = async () => {
      try {
        const results = await fetchSearchMovie(query);
        setMovies(results);
      } catch (error) {
        console.error("Error loading", error);
      }
    };

    getDataSearchMovies();
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form className={clsx(s.forma)}>
            <Field
              className={clsx(s.inputSearchBar)}
              name="query"
              value={values.query}
              onChange={(e) => {
                handleChange(e);
                handleChangeQuery(e.target.value);
              }}
            />
            <button className={clsx(s.btnSearchBar)} type="submit">
              Search...
            </button>
          </Form>
        )}
      </Formik>
      <MovieList movies={movies} />
    </>
  );
}
