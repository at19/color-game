import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./styles.css";

import { ColorModelContext } from "../../contexts";
import { COLOR_PATTERNS } from "../../values";

const LandingPage = ({ handleColorModelChange }) => {
  const options = [
    { value: COLOR_PATTERNS.RGB, label: COLOR_PATTERNS.RGB },
    { value: COLOR_PATTERNS.HEX, label: COLOR_PATTERNS.HEX },
    { value: COLOR_PATTERNS.HSL, label: COLOR_PATTERNS.HSL }
  ];
  return (
    <ColorModelContext.Consumer>
      {model => {
        return (
          <div>
            <Select
              value={options.map(e => (e.value === model ? e : null))}
              onChange={selectedOption => {
                handleColorModelChange(selectedOption.value);
              }}
              options={options}
            />
            <Link to="/play">Try it out</Link>
            <br />
            <Link to="/login">Login</Link>
          </div>
        );
      }}
    </ColorModelContext.Consumer>
  );
};

export default LandingPage;
