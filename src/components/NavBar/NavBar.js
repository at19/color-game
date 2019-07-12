import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { AuthContext } from "../../contexts";

const NavBar = props => {
  const [lastName, setLastName] = useState(
    localStorage.getItem("USER_LAST_NAME")
  );

  useEffect(() => {
    const set = () => setLastName(localStorage.getItem("USER_LAST_NAME"));

    document.addEventListener("localStorageItemInserted", set);

    return function cleanup() {
      document.removeEventListener("localStorageItemInserted", set);
    };
  });

  return (
    <div>
      <nav className="nav-container">
        <div className="nav-container__inner">
          <div className="home-link__container">
            <Link to="/" className="home-link">
              Choosing Colors
            </Link>
          </div>
          <ul className="top-nav">
            <li className="top-nav__authButton">
              <p>{lastName !== "0" ? lastName : null}</p>
              <AuthContext.Consumer>
                {auth => {
                  return auth !== null ? (
                    <button onClick={props.signOut}>Sign out</button>
                  ) : (
                    <Link to="/login">Login</Link>
                  );
                }}
              </AuthContext.Consumer>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
