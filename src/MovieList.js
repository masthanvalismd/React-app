import { Movie } from "./Movie";
import { useState, useEffect } from "react";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

export function MovieList() {
  const [movies, setMovieList] = useState([]);
  const getMovies = () => {
    fetch("https://61c55338c003e70017b7965d.mockapi.io/movies", {
      method: "GET",
    })
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs));
  };
  useEffect(getMovies, []);
  const deleteMovie = (id) => {
    // // console.log("Deleting Movie..");
    // const deleteIndex = index;
    // const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
    // // console.log(movies, remainingMovies);
    // setMovieList(remainingMovies);

    fetch(`https://61c55338c003e70017b7965d.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => data.json())
      .then(() => getMovies());
  };

  
  return (
    <div className="movieList">
      {movies.map(({ name, poster, rating, summary, id }, index) => (
        <Movie
          key={index}
          deleteButton={
            <IconButton
              color="error"
              onClick={() => deleteMovie(id)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          id={id}
          poster={poster}
          name={name}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
