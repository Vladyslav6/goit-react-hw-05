import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Headers from "./components/Headers/Headers";

function App() {
  return (
    <>
      <div>
        <Headers />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <p>Start hw</p>
      </div>
    </>
  );
}

export default App;
///
//API  21ba5c9b0124eaafcb5abd44162bbdbe
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWJhNWM5YjAxMjRlYWFmY2I1YWJkNDQxNjJiYmRiZSIsIm5iZiI6MTc0NDkxMTg0MC4zMzUsInN1YiI6IjY4MDEzZGUwZTQ3NTM0MjVlZmFkMGQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jh6pnNVvXOZHuW0a7kZDYo7ZFiFijd0fTYAJpcuk4QY
///
