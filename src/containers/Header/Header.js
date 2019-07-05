import React from "react";
import "./Header.css";

const header = props => {
  const dark = `hsl(0, 0%, 15%)`;
  const light = `hsl(0, 0%, 95%)`;
  const lightness = props.headerColor.split(",")[2].split("%")[0];
  const textColor = lightness < 45 ? light : dark;

  console.log(props.resetColors);

  return (
    <div className="header" style={{ backgroundColor: props.headerColor }}>
      <h2 className="header__color" style={{ color: textColor }}>
        {props.chosenColor}
      </h2>
      <div className="header__buttons">
        {props.resetColors !== null ? ( // If props.resetColors isn't null, then load New Colors button
          <button onClick={props.resetColors}>New Colors</button>
        ) : null}
      </div>
      <p className="header__subtext">Tries Left: {props.triesLeft}</p>
    </div>
  );
};

export default header;
