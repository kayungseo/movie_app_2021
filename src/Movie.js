import React from "react";
import PropTypes from 'prop-types';

function Movie({title, year, summary, poster, genres}){ //state 필요없음 => 함수형 컴포넌트로 작성 
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}/>
      <div class="movie__data">
        <h3 class="movie__title" style={{backgroundColor: 'red'}}>{title}</h3>
        <h5 class="movie__year">{year}</h5>
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
