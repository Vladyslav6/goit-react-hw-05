import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ trendFilm }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.ulWrapper}>
        {trendFilm.map((item) => (
          <li key={item.id} className={css.listWrapper}>
            <NavLink
              state={location}
              to={`/movies/${item.id.toString()}`}
              className={css.LinkStyle}
            >
              <div className={css.wrapperBox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  width={500}
                />
                <div className={css.spanWrapper}>
                  <span>{item.original_title}</span>
                  <span>Data release: {item.release_date}</span>
                  <span> TMDB {item.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
