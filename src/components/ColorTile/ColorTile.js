import React from "react";
import "./ColorTile.css";

const colorTile = props => (
  <div
    className="tile"
    style={{ backgroundColor: props.backgroundColor }}
    id={props.whichOne}
  />
);

export default colorTile;
