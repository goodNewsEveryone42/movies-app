import React, { useState } from "react";
import ModalInfo from "../modal-info";

import "./movies-list-card.css";

const MoviesListCards = (props) => {
  const {
    movieList: { Poster },
  } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <div className="movies-list__card" onClick={() => setShowModal(true)}>
        <img src={Poster} />
      </div>
      <ModalInfo
        show={showModal}
        close={() => setShowModal(false)}
        movieList={props.movieList}
      />
    </React.Fragment>
  );
};

export default MoviesListCards;
