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

  const handleChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    if (query === "") {
      imdbService.getResource().then((res) => setMovies(res));
    }
    imdbService.getSearch(query).then((res) => setMovies(res));
  };

  return (
    <div className="app-container">
      <Header handleChange={handleChange} />
      <MoviesList movieList={movies} />
    </div>
  );
};

export default App;
