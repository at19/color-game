import React from "react";
import "./Colors.css";

import ColorTile from "../../components/ColorTile/ColorTile";

const colorTiles = colors => {
  const colorTiles = [];
  for (let index = 0; index < colors.length; index++) {
    colorTiles.push(
      <ColorTile
        key={index + 1}
        whichOne={index}
        backgroundColor={colors[index]}
      />
    );
  }
  return colorTiles;
};

const colorTileStacks = colorTiles => {
  const colorStacks = [];
  for (let index = 0; index < colorTiles.length; index += 3) {
    colorStacks.push(
      <div key={index} className="color-stack ">
        {colorTiles[index]}
        {colorTiles[index + 1]}
        {colorTiles[index + 2]}
      </div>
    );
  }
  return colorStacks;
};

const colors = props => {
  return (
    <div className="colors" onClick={e => props.onClick(e)}>
      {/* {colorTiles(props.colors)} */}
      {colorTileStacks(colorTiles(props.colors))}
    </div>
  );
};

export default colors;
