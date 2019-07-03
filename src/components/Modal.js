import React from "react";
import "./Modal.css";

export default props => {
  return (
    <div className="modal">
      <div className="modal__body">
        <p>Points: {props.points}</p>
      </div>
      <div className="modal__overlay" />
      <div className="modal__overlay" onClick={() => props.playAgain()} />
    </div>
  );
};
