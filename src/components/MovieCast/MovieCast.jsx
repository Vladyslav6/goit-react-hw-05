import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import css from "./MovieCast.module.css";
const MovieCast = () => {
  const { moviesId } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastById(moviesId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id} className={css.listBox}>
            <div className={css.flexBox}>
              <img
                className={css.imageContainer}
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                width={100}
              />
              <div className={css.SpecificationActor}>
                <span>Actor: {item.name}</span>
                <span>Character: {item.character}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
