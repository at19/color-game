import React from "react";
import "./ColorTile.css";

export default props => (
  <div
    className="tile"
    style={{ backgroundColor: props.backgroundColor }}
    id={props.whichOne}
  />
);
