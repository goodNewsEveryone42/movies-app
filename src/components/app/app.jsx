import React, { useState, useEffect } from "react";
import Header from "../header";
import MoviesList from "../movies-list";
import PaginationTemlate from "../pagination";
import ImdbService from "../../service/imdb-service";

import "./app.css";

const App = () => {
  const [movies, setMovies] = useState(null);

  const imdbService = new ImdbService();

  useEffect(() => {
    imdbService.getResource().then((res) => setMovies(res));
  }, []);

  console.log(movies);

  return (
    <div className="app-container">
      <div></div>
      <Header />
      <MoviesList />
      <PaginationTemlate />
    </div>
  );
};

export default App;
