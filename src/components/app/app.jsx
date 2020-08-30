import React, { useState, useEffect } from "react";
import Header from "../header";
import MoviesList from "../movies-list";
import ImdbService from "../../service/imdb-service";

import "./app.css";

const App = () => {
  const [movies, setMovies] = useState(null);

  const imdbService = new ImdbService();

  useEffect(() => {
    imdbService.getResource().then((res) => setMovies(res));
  }, []);

  return (
    <div className="app-container">
      <div></div>
      <Header />
      <MoviesList movieList={movies} />
    </div>
  );
};

export default App;
