export const MAX_HUE_VALUE = 360;
export const MAX_SATURATION_VALUE = 90;
export const MAX_LIGHTNESS_VALUE = 85;

export const MAX_RGB_VALUE = 200;
export const MIN_HSL_RGB_VALUE = 25;

export const DIFFICULTIES = [
  {
    // Difficulty 0
    minimumPoints: 0,
    numberOfColors: 3,
    similarColors: 0,
    headerColor: "hsl(0, 25%, 97%)",
    // headerColor: "radial-gradient(hsl(300, 20%, 30%), hsl(295, 20%, 30%))", // Gray
    canLoadNewColors: true
  },
  {
    // Difficulty 1
    minimumPoints: 50,
    numberOfColors: 6,
    similarColors: 1,
    headerColor: "hsl(0, 25%, 97%)", // Green
    canLoadNewColors: true
  },
  {
    // Difficulty 2
    minimumPoints: 100,
    numberOfColors: 6,
    similarColors: 2,
    headerColor: "hsl(0, 25%, 97%)", // Blue
    canLoadNewColors: false
  },
  {
    // Difficulty 3
    minimumPoints: 200,
    numberOfColors: 9,
    similarColors: 4,
    headerColor: "hsl(0, 25%, 97%)", // Purple
    // headerColor: "radial-gradient(hsl(300, 20%, 30%), hsl(295, 20%, 30%))",
    canLoadNewColors: false
  },
  {
    // Difficulty 4
    minimumPoints: 350,
    numberOfColors: 9,
    similarColors: 5,
    headerColor: "hsl(0, 25%, 97%)", // Gold
    canLoadNewColors: false
  }
];

export const GAMEOVER_TEXT = "GAMEOVER";

export const COLOR_PATTERNS = {
  RGB: "RGB",
  HSL: "HSL",
  HEX: "HEX"
};

export const MIN_POINTS = 0;
export const ENTRY_DIFFICULTY = 0;
export const MAX_TRIES = 5;

export const POINTS_ADDITION = 10;

export const BACKGROUND_COLOR = "hsl(0, 25%, 97%)";
