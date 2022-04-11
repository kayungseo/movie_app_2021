import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, year, summary, poster, genres}){ //state 필요없음 => 함수형 컴포넌트로 작성 
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}/>
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <ul>
          {genres.map((genre, index) => {
            return <li key={index} className="movie__genre">{genre}</li>;
          })}
        </ul>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
