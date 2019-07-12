import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

import { AuthContext } from "../../contexts";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__body">
        <p className="celebratory">You Won {props.points} points!</p>
        <AuthContext.Consumer>
          {auth =>
            auth !== null ? null : (
              <p className="subtext">
                <Link to="/login">Login</Link> to save your score, and compete
                with friends!
              </p>
            )
          }
        </AuthContext.Consumer>
      </div>
      <div className="modal__overlay" onClick={() => props.playAgain()} />
    </div>
  );
};

export default Modal;
