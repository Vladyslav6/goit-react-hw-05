import { useEffect } from "react";
import { useState } from "react";
import { fetchTmdb } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

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
  console.log(trendFilm);
  return (
    <div>
      <h2>Tranding Tuday</h2>
      <MovieList trendFilm={trendFilm} />
    </div>
  );
};
export default HomePage;

// const trendFilm = await fetchTmdb(abortController.signal);
