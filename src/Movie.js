import { useState } from "react";
import { Counter } from "./Counter";
import Button from "@mui/material/Button";
// import { ColorBox } from "./ColorBox";
// import {AddMovie} from "./AddMovie";

export function Movie({ poster, name, rating, summary, deleteButton }) {
  const styles = {
    color: rating >= 8.5 ? "green" : "crimson",
  };
  const [show, setShow] = useState(true);
  // const descriptionStyles={display:show?"block":"none"}
  return (
    <div className="movie-container">
      <img className="pic" src={poster} alt="img" />
      <Counter />
      <div className="delBtn">{deleteButton}</div>
      <div className="det">
        {/* <ColorBox/> */}

        <h2>{name}</h2>
        <p style={styles} className="rating">
          {rating}⭐
        </p>
      </div>
      <Button
     style={{ backgroundColor: "wheat", color: "black",padding: "5px" }}

        variant="contained" onClick={() => setShow(!show)}>
        Toggle Description
      </Button>
      {/* <p style={ descriptionStyles} className="movie-summary">{summary}</p> */}
      {show ? <p className="movie-summary">{summary}</p> : ""}
    </div>
  );
}
