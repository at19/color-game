import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__body">
        <p>Points: {props.points}</p>
        <p>
          <Link to="/login">Login</Link> to save your score, and compete with
          friends!
        </p>
      </div>
      <div className="modal__overlay" />
      <div className="modal__overlay" onClick={() => props.playAgain()} />
    </div>
  );
};

export default Modal;
