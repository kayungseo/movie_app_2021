import React from "react";
import axios from 'axios';
import Movie from './Movie';
class App extends React.Component {

  state = {
    isLoading : true,
    movies : [],
  };

  getMovies = async () => {//비동기함수니 기다리라
    const {
      data : { 
        data : {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');//실행끝나면 진행, rating 으로 sort해서 데이터 가져옴 
    this.setState({movies, isLoading:false});
    // this.setState({movies:movies});
  }

  componentDidMount(){
    this.getMovies();
  }

  render() { //함수가 아니라 return 대신 render()
    const {isLoading, movies} = this.state;
    return <div>{isLoading? 'Loading...' : movies.map((movie) => {
      console.log(movie);
      return <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
      />;
    })}</div>
  }
}

export default App;
