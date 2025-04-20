import axios from "axios";

export const fetchTmdb = async (signal) => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY",
    },
  };

  try {
    const response = await axios.get(url, options, { signal });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTmdbById = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Error Api");
  }
};

export const fetchCastById = async (paramId) => {
  const url = `https://api.themoviedb.org/3/movie/${paramId}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.log(error);
    console.log("Error Api");
  }
};

// axios
// .get(url, options)
// .then((response) => console.log(response))
// .catch((err) => console.error(err));

//
//
// const response = await axios.get(url, options, { signal });

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY' \
//      --header 'accept: application/json'
