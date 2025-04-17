import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/moviespage">Movies</NavLink>
    </nav>
  );
};

export default Headers;
