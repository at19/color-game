import React from "react";
import { COLOR_PATTERNS } from "./values";

export const AuthContext = React.createContext({
  user: null
});

export const ColorModelContext = React.createContext({
  model: COLOR_PATTERNS.RGB
});

const colorModelReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_COLOR_MODEL":
      return {
        model: action.payload
      };
    default:
      return state;
  }
};

export const ColorModelContextProvider = ({ model, ...props }) => {
  const [state, dispatch] = React.useReducer(
    colorModelReducer,
    COLOR_PATTERNS.RGB
  );
  return (
    <ColorModelContext.Provider
      value={{
        ...state,
        handleColorModelChange: model =>
          dispatch({ type: "SWITCH_COLOR_MODEL", payload: model })
      }}
    >
      {props.children}
    </ColorModelContext.Provider>
  );
};
