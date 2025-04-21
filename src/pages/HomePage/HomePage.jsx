import { useEffect } from "react";
import { useState } from "react";
import { fetchTmdb } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendFilm, setTrendFilm] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const trendFilm = await fetchTmdb(abortController.signal);
        setTrendFilm(trendFilm);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h1 className={css.titleHomePage}>Tranding Tuday</h1>
      <MovieList trendFilm={trendFilm} />
    </div>
  );
};
export default HomePage;

// const trendFilm = await fetchTmdb(abortController.signal);
