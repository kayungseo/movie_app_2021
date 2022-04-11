import React from "react";
import PropTypes from 'prop-types';

// function Food(props){
//   console.log(props);
//   return <h1>I like {props.fav}</h1>;
// }

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/> 
    </div>
    );
}

const foodILike = [
  {
    id : 1,
    name: 'Kimchi',
    image : 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating : 4.8
  },
  {
    id : 2,
    name: 'Onion',
    image : 'https://cdn.mkhealth.co.kr/news/photo/202106/53426_54835_622.jpg',
    rating : 4.2
  }
];

function renderFood(plate){
  return <Food key={plate.id} name={plate.name} picture={plate.image} rating={plate.rating}/>
}

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div><h1>Hello</h1>
    {foodILike.map(renderFood)}
    </div>

    // <div><h1>Hello</h1>
    // {foodILike.map(
    //   dish => (
    //     <Food name={dish.name} picture={dish.image}/>
    // ))}
    // </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
}
export default App;
