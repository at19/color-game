import React from "react";
import "./ColorTile.css";

import { BACKGROUND_COLOR } from "../../values";

const ColorTile = props => {
  return (
    <div
      className={
        props.backgroundColor === BACKGROUND_COLOR
          ? "tile"
          : "tile tile--modified"
      }
      // className="tile"
      style={{ backgroundColor: props.backgroundColor }}
      id={props.whichOne}
    />
  );
};

export default ColorTile;
