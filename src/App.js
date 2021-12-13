import React from "react"
import propTypes from "prop-types"

const foodLikes = [
  {
    'id': 1,
    'name': "borch",
    'img': "https://friendlylocalguides.com/blog/wp-content/uploads/2017/11/Russan-food-Borsch.-Photo-by-Feeding-My-Kid.jpg",
    "rating": 4.5
  },
  {
    'id': 2,
    'name': "borch2",
    'img': "https://vselekari.com/wp-content/uploads/2016/02/Borscht_served.jpg",
    "rating": 4.4
  },
  {
    'id': 3,
    'name': "borch3",
    'img': "https://clicktraveltips.com/wp-content/uploads/2017/09/Borsch-russia.jpg",
    "rating": 4.3
  },
  {
    'id': 4,
    'name': "borch4",
    'img': "https://i.pinimg.com/736x/a6/c8/c7/a6c8c76ffbde60181261196de8948fd7.jpg",
    "rating": 4.9
  },
];

function Food({ name, img, id, rating }) {
  return (
    <div>
      <p>{id}</p>
      <h3>i love tae {name}</h3>
      <h4>rating / {rating}</h4>
      <img src={img} alt="" />
    </div>
  );
}


Food.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
}

function renderFood(e) {
  return <Food id={e.id} name={e.name} rating={e.rating} img={e.img} />;
}

function App() {
  return (
    <div>
      {foodLikes.map(renderFood)}
    </div>
  );
}

export default App;
