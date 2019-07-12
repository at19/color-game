import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Hero.css";

import { ColorModelContext, AuthContext } from "../../contexts";
import { COLOR_PATTERNS } from "../../values";

const Hero = ({ handleColorModelChange }) => {
  const options = [
    { value: COLOR_PATTERNS.RGB, label: COLOR_PATTERNS.RGB },
    { value: COLOR_PATTERNS.HEX, label: COLOR_PATTERNS.HEX },
    { value: COLOR_PATTERNS.HSL, label: COLOR_PATTERNS.HSL }
  ];

  return (
    <div className="hero">
      <div className="hero__inner">
        <h2>Learn your colors, while having fun</h2>
        <div className="hero__select">
          <ColorModelContext.Consumer>
            {model => (
              <Select
                value={options.map(e => (e.value === model ? e : null))}
                onChange={selectedOption => {
                  handleColorModelChange(selectedOption.value);
                }}
                options={options}
              />
            )}
          </ColorModelContext.Consumer>
        </div>
        <Link className="hero__cta" to="/play">
          <AuthContext.Consumer>
            {auth => (auth !== null ? "Play" : "Try it out!")}
          </AuthContext.Consumer>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
