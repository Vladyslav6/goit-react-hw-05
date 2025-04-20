import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Headers from "./components/Headers/Headers";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <div>
        <Headers />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="moviecast" element={<MovieCast />} />
            <Route path="moviereviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
