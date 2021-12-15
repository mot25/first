import React from "react";
// import propTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">loading...</span>
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);
            return (
              <div className="movies">
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  sumary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </div>
            );
          })
        )}
      </section>
    );
  }
  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }
}

export default App;

// life commponent
// class App extends React.Component {
//   state = {
//     count: 0,
//   };
// // start or deginning
//   constructor(props) {
//     super(props);
//     console.log("constructor");
//   }

//   add = () => {
//     this.setState((current) => ({ count: current.count + 1 }));
//   };

//   remove = () => {
//     this.setState((current) => ({ count: current.count - 1 }));
//   };
//   // render finished
//   componentDidMount() {
//     console.log("a vse");
//   }
// // update render
//   componentDidUpdate() {
//     console.log("update");
//   }
// //render
//   render() {
//     console.log("render");
//     return (
//       <div>
//         <h1>hello i commponent on base class</h1>
//         <h3>current number: {this.state.count}</h3>
//         <button onClick={this.add}>plus</button>
//         <button onClick={this.remove}>minus</button>
//       </div>
//     );
//   }
// }

// ============================ static
// const foodLikes = [
//   {
//     'id': 1,
//     'name': "borch",
//     'img': "https://friendlylocalguides.com/blog/wp-content/uploads/2017/11/Russan-food-Borsch.-Photo-by-Feeding-My-Kid.jpg",
//     "rating": 4.5
//   },
//   {
//     'id': 2,
//     'name': "borch2",
//     'img': "https://vselekari.com/wp-content/uploads/2016/02/Borscht_served.jpg",
//     "rating": 4.4
//   },
//   {
//     'id': 3,
//     'name': "borch3",
//     'img': "https://clicktraveltips.com/wp-content/uploads/2017/09/Borsch-russia.jpg",
//     "rating": 4.3
//   },
//   {
//     'id': 4,
//     'name': "borch4",
//     'img': "https://i.pinimg.com/736x/a6/c8/c7/a6c8c76ffbde60181261196de8948fd7.jpg",
//     "rating": 4.9
//   },
// ];

// function Food({ name, img, id, rating }) {
//   return (
//     <div>
//       <p>{id}</p>
//       <h3>i love tae {name}</h3>
//       <h4>rating / {rating}</h4>
//       <img src={img} alt="" />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   img: propTypes.string.isRequired,
//   rating: propTypes.number.isRequired
// }

// function renderFood(e) {
//   return <Food id={e.id} name={e.name} rating={e.rating} img={e.img} />;
// }

// function App() {
//   return (
//     <div>
//       {foodLikes.map(renderFood)}
//     </div>
//   );
// }

// export default App;
