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
    headerColor: "rgba(150, 150, 150, 0.5)",
    // headerColor: "radial-gradient(hsl(300, 20%, 30%), hsl(295, 20%, 30%))", // Gray
    canLoadNewColors: true
  },
  {
    // Difficulty 1
    minimumPoints: 50,
    numberOfColors: 6,
    similarColors: 1,
    headerColor: "rgba(50, 200, 50, 0.5)", // Green
    canLoadNewColors: true
  },
  {
    // Difficulty 2
    minimumPoints: 100,
    numberOfColors: 6,
    similarColors: 2,
    headerColor: "rgba(25, 100, 200, 0.5)", // Blue
    canLoadNewColors: false
  },
  {
    // Difficulty 3
    minimumPoints: 200,
    numberOfColors: 9,
    similarColors: 4,
    headerColor: "rgba(200, 25, 200, 0.7)", // Purple
    canLoadNewColors: false
  },
  {
    // Difficulty 4
    minimumPoints: 350,
    numberOfColors: 9,
    similarColors: 5,
    headerColor: "rgba(225, 200, 0, 0.7)", // Gold
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
