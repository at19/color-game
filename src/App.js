import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Play from "./containers/Play/Play";
import Auth from "./containers/Auth/Auth";
import { COLOR_PATTERNS } from "./values";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          render={() => <Play colorPattern={COLOR_PATTERNS.HSL} />}
        />
        <Route path="/login" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
