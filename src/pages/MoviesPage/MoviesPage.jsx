import { Formik, Form, Field } from "formik";
import clsx from "clsx";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const handleSubmit = (action) => {
    action.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <Form className={clsx(s.forma)}>
        <Field className={clsx(s.inputSearchBar)} name="name"></Field>
        <button className={clsx(s.btnSearchBar)} type="submit">
          Search...
        </button>
      </Form>
    </Formik>
  );
}
