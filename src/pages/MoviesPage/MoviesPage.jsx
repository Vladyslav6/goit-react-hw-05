import MovieSearchList from "../../components/MovieSearchList/MovieSearchList";

import { useEffect, useState } from "react";
import { fetchSerchMovies } from "../../services/api";

const MoviesPage = () => {
  const [serchMovies, setSerchMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmitMavies = (newValue) => {
    setQuery(newValue);
  };
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchSerchMovies(query);
        setSerchMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);
  console.log(serchMovies);

  return (
    <div>
      <MovieSearchList handleSubmitMavies={handleSubmitMavies} />
      <ul>
        {serchMovies.map((item) => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
