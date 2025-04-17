import React from "react";

const MovieList = ({ trendFilm }) => {
  return (
    <div>
      <ul>
        {trendFilm.map((item) => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
