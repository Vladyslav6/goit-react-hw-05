import { Field, Form, Formik } from "formik";
import React from "react";

const MovieSearchList = ({ handleSubmitMavies }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    handleSubmitMavies(values.query);
  };
  return (
    <div>
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
