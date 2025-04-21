import MovieSearchList from "../../components/MovieSearchList/MovieSearchList";

import { useEffect, useState } from "react";
import { fetchSerchMovies } from "../../services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [seachParams, setSearchParams] = useSearchParams();

  const query = seachParams.get("query") ?? "";

  const handleSubmitMavies = (newValue) => {
    seachParams.set("query", newValue);
    setSearchParams(seachParams);
  };

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchSerchMovies(query);
        setSearchMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);
  console.log(searchMovies);
  return (
    <div>
      <MovieSearchList handleSubmitMavies={handleSubmitMavies} />
      <MovieList trendFilm={searchMovies} />
    </div>
  );
};
export default MoviesPage;
