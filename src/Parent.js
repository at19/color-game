import React, { useState, useEffect } from "react";
import App from "./App";

import { getAuthObserver } from "./firebase";

const Parent = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getAuthObserver(user => {
      setCurrentUser(user);
    });
  });

  return parseInt(localStorage.getItem("IS_USER_LOGGED_IN")) ? (
    currentUser ? (
      <App />
    ) : (
      <div>Signing you in...</div>
    )
  ) : (
    <App />
  );
};

export default Parent;
