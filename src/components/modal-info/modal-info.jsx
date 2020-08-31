import React from "react";

import "./modal-info.css";

const ModalInfo = (props) => {
  const { show, close } = props;
  const {
    Poster,
    Title,
    Plot,
    Year,
    Runtime,
    Genre,
    Production,
    Country,
    Director,
    Writer,
    Actors,
    Awards,
  } = props.movieList;

  const elementsInfo = [Year, Runtime, Genre].map((el) => {
    return <p key={Math.random()}>{el}</p>;
  });

  const objForTable = { Production, Country, Director, Writer, Actors, Awards };

  const elementsTable = Object.entries(objForTable).map(([key, value]) => {
    return (
      <tr key={Math.random()}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    );
  });

  return (
    <React.Fragment>
      {show && (
        <div className="modal-window">
          <div className="modal-window__opacity"></div>
          <div className="modal-window__container">
            <div className="modal-window__header">
              <button
                className="modal-window__btn"
                type="button"
                onClick={close}
              >
                X
              </button>
            </div>
            <div className="modal-window__wrap">
              <div className="modal-window__img-container">
                <img src={Poster} />
              </div>
              <div className="modal-window__block-info">
                <p className="modal-window__title">{Title}</p>
                <p className="modal-window__description">{Plot}</p>
                <div className="modal-window__items-info">{elementsInfo}</div>
                <table className="modal-window__table">
                  <tbody>{elementsTable}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ModalInfo;
