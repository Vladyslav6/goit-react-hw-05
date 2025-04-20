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

export const fetchCastById = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US`;

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

export const fetchReviewsById = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
    console.log("Error Api");
  }
};

export const fetchSerchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
    console.log("Error Api");
  }
};
