import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const LoggedInPage = ({ signOut }) => {
  return (
    <div>
      <Link to="/play">Let's Play!</Link>
      <button onClick={signOut}>Sign out!</button>
    </div>
  );
};

export default LoggedInPage;
