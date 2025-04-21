import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchTmdbById } from "../../services/api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTmdbById(moviesId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [moviesId]);

  return (
    <>
      <Link to={goBackRef.current}>
        <button className={css.linkButton}>Go back</button>
      </Link>
      <div className={css.wrapperBox}>
        <div className={css.flexWrapper}>
          <img
            className={css.imageContainer}
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path} `}
            width={500}
          />
          <div className={css.aboutMovie}>
            <h2>{movies.title}</h2>
            <p>{movies.overview}</p>
            <h3>TMBD {movies.vote_average}</h3>
          </div>
        </div>
        <div>
          <hr />
          <p>Additional information</p>
          <nav>
            <NavLink to="moviecast" className={css.linkReview}>
              Cast{" "}
            </NavLink>
            <NavLink to="moviereviews" className={css.linkReview}>
              Reviews{" "}
            </NavLink>
          </nav>
          <hr />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
