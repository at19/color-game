import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

import MainPage from "./containers/MainPage";
import Play from "./containers/Play/Play";
import Auth from "./containers/Auth/Auth";

import { AuthContext, ColorModelContext } from "./contexts";
import {
  signInUser,
  signOutUser,
  createUser,
  addUserToFirestore,
  getLeaderboardContent,
  getCurrentUser,
  getUserData
} from "./firebase";

function setLocalStorageItem(key, value) {
  localStorage.setItem(key, value);
  document.dispatchEvent(new Event("localStorageItemInserted"));
}

function App() {
  const [userInfo, setUserInfo] = useState(
    parseInt(localStorage.getItem("IS_USER_LOGGED_IN"))
      ? getCurrentUser()
      : null
  );
  const [redirectElement, setRedirectElement] = useState(null);
  const initialColorModel = useContext(ColorModelContext);
  const [colorModel, setColorModel] = useState(
    localStorage.getItem("COLOR_MODEL") || initialColorModel
  );

  function performLoggedInWork(res) {
    localStorage.setItem("IS_USER_LOGGED_IN", 1);
    setUserInfo(res.user);
    setRedirectElement(<Redirect to="/" />);

    getUserData(res.user.uid).then(res => {
      const names = res.docs[0].data().name.split(" ");
      const lastName = names[names.length - 1];
      setLocalStorageItem("USER_LAST_NAME", lastName);
    });
  }

  async function signIn(email, password) {
    const res = await signInUser(email, password);
    performLoggedInWork(res);
  }

  async function create(name, email, password) {
    const res = await createUser(name, email, password);
    performLoggedInWork(res);
    const { uid } = res.user;
    addUserToFirestore(uid, name, email);
  }

  function signOut() {
    signOutUser().then(() => {
      localStorage.setItem("IS_USER_LOGGED_IN", 0);
      setUserInfo(null);
      setLocalStorageItem("USER_LAST_NAME", 0);
    });
  }

  function handleColorModelChange(colorModel) {
    setColorModel(colorModel);
    localStorage.setItem("COLOR_MODEL", colorModel);
  }

  return (
    <Router>
      <div className="App">
        <AuthContext.Provider value={userInfo}>
          <ColorModelContext.Provider value={colorModel}>
            <Route
              path="/login"
              render={() => (
                <AuthContext.Consumer>
                  {auth => {
                    return auth !== null ? (
                      <Redirect to="/" />
                    ) : (
                      <Auth signInUser={signIn} createUser={create} />
                    );
                  }}
                </AuthContext.Consumer>
              )}
            />
            <Route
              path="/"
              exact
              render={() => (
                <MainPage
                  signIn={signIn}
                  signOut={signOut}
                  handleColorModelChange={model =>
                    handleColorModelChange(model)
                  }
                  leaderboardContent={colorPattern =>
                    getLeaderboardContent(colorPattern)
                  }
                />
              )}
            />
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
