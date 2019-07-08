import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LandingPage from "./containers/LandingPage";
import LoggedInPage from "./containers/LoggedInPage";
import Play from "./containers/Play/Play";
import Auth from "./containers/Auth/Auth";

import { AuthContext, ColorModelContext } from "./contexts";
import {
  signInUser,
  signOutUser,
  createUser,
  addUserToFirestore,
  getAuthObserver
} from "./firebase";
import { COLOR_PATTERNS } from "./values";

function App() {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("IS_USER_LOGGED_IN")
  );
  const [redirectElement, setRedirectElement] = useState(null);
  const [colorModel, setColorModel] = useState(COLOR_PATTERNS.RGB);

  useEffect(() => {
    getAuthObserver(user => {
      setUserInfo(user);
    });
  });

  function performLoggedInWork(res) {
    localStorage.setItem("IS_USER_LOGGED_IN", true);
    setRedirectElement(<Redirect to="/" />);
    setUserInfo(res);
  }

  function signIn(email, password) {
    return signInUser(email, password).then(res => {
      performLoggedInWork(res);
    });
  }

  function create(name, email, password) {
    return createUser(name, email, password).then(res => {
      performLoggedInWork(res);
      const { uid, email } = res.user;
      addUserToFirestore(uid, name, email);
    });
  }

  function signOut() {
    signOutUser().then(() => {
      localStorage.setItem("IS_USER_LOGGED_IN", false);
    });
  }

  function handleColorModelChange(colorModel) {
    setColorModel(colorModel);
  }

  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={userInfo}>
          <ColorModelContext.Provider value={colorModel}>
            <Route
              path="/login"
              render={() => <Auth signInUser={signIn} createUser={create} />}
            />
            <AuthContext.Consumer>
              {auth => {
                return (
                  <Route
                    path="/"
                    exact
                    render={() =>
                      auth !== null ? (
                        <LoggedInPage signOut={signOut} />
                      ) : (
                        <LandingPage
                          handleColorModelChange={model =>
                            handleColorModelChange(model)
                          }
                        />
                      )
                    }
                  />
                );
              }}
            </AuthContext.Consumer>
            <ColorModelContext.Consumer>
              {model => (
                <Route
                  path="/play"
                  render={() => <Play colorPattern={model} />}
                />
              )}
            </ColorModelContext.Consumer>
          </ColorModelContext.Provider>
        </AuthContext.Provider>
        {redirectElement}
      </div>
    </Router>
  );
}

export default App;
