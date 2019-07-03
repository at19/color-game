import React from "react";

import Play from "./containers/Play";
import { COLOR_PATTERNS } from "./values";

function App() {
  return (
    <div className="App">
      <Play colorPattern={COLOR_PATTERNS.HEX} />
    </div>
  );
}

export default App;
