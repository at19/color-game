import React from "react";

import Play from "./containers/Play/Play";
import { COLOR_PATTERNS } from "./values";

function App() {
  return (
    <div className="App">
      <Play colorPattern={COLOR_PATTERNS.HSL} />
    </div>
  );
}

export default App;
