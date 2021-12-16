import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, sumary, genres, poster }) {
  return (
    <div className="movie">
      <img className="movie-poster" src={poster} alt={poster} />
      <div className="movie-column">
        <h1 className="movie-title">title: {title}</h1>
        <p className="movie-sumary">sumary: {sumary}</p>
        <h3 className="movie-year">year: {year}</h3>
        <ul className="genres">
          {genres.map((item, i) => {
            return <li key={i}>{item}</li>; 
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  sumary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
