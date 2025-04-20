import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

const MovieCast = () => {
  const { moviesId } = useParams();

  const [cast, setCast] = useState({});
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
  console.log(cast)
  
  return (
    <div>
  
      {cast.map((item)=>(
        <li>{item.name}</li>
        
      ))}
    
    </div>
  );
};

export default MovieCast;
{/* <ul className={css.cards}>
{sendPhoto.map((item) => (
  <li key={item.id}>
    <ImageCard sendItem={item} handleClick={handleClick} />
  </li>
))}
</ul> */}