import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchTmdbById } from "../../services/api";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState([]);
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
    <div>
      MovieDetailsPage
      <p>{movies.id}</p>
      <p>{movies.title}</p>
      <div>
        <hr />
        <p>Additional information</p>
        <nav>
          <NavLink to="moviecast"> Movie Cast</NavLink>
          <NavLink to="moviereviews"> Movie Revies</NavLink>
        </nav>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
