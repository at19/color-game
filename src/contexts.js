import React from "react";
import { COLOR_PATTERNS } from "./values";

export const AuthContext = React.createContext();

export const ColorModelContext = React.createContext(COLOR_PATTERNS.RGB);
