import React from "react";
import MoviesListCards from "../movies-list-card";

import "./movies-list.css";

const MoviesList = (props) => {
  const { movieList } = props;
  const renderItem = () => {
    return (
      movieList &&
      movieList.map((el) => {
        return <MoviesListCards key={el.imdbID} movieList={el} />;
      })
    );
  };

  return (
    <div className="movies-list">
      <div className="moveis-list__wrapper">
        <div className="movies-list__container">{renderItem()}</div>
      </div>
    </div>
  );
};

export default MoviesList;
