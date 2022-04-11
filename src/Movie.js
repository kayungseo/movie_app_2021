import React from "react";
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster, genres}){ //state 필요없음 => 함수형 컴포넌트로 작성 
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;
