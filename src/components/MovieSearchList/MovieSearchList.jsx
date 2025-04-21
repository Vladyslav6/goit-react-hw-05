import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./MovieSearchList.module.css";

const MovieSearchList = ({ handleSubmitMavies }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    handleSubmitMavies(values.query);
  };
  return (
    <div className={css.serchBox}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieSearchList;
