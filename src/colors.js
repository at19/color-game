import * as values from "./values";

const _factor = Math.floor(Math.random() * 10);
const randomFactor = Math.round(Math.random()) ? _factor : -_factor;

const hexToRgb = hex =>
  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    .exec(hex)
    .slice(1)
    .map(e => parseInt(e, 16));

const rgbToHex = rgb =>
  "#" + rgb.map(x => x.toString(16).padStart(2, "0")).join("");

const randomColor = colorPattern => {
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      const hue = Math.floor(Math.random() * values.MAX_HUE_VALUE) + 1;
      const saturation =
        Math.floor(Math.random() * values.MAX_SATURATION_VALUE) + 1;
      const lightness =
        Math.floor(
          Math.random() *
            (values.MAX_LIGHTNESS_VALUE - values.MIN_LIGHTNESS_VALUE)
        ) +
        1 +
        values.MIN_LIGHTNESS_VALUE;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    case values.COLOR_PATTERNS.RGB:
      const red = Math.floor(Math.random() * values.MAX_RGB_VALUE) + 1;
      const green = Math.floor(Math.random() * values.MAX_RGB_VALUE) + 1;
      const blue = Math.floor(Math.random() * values.MAX_RGB_VALUE) + 1;

      return `rgb(${red}, ${green}, ${blue})`;

    case values.COLOR_PATTERNS.HEX:
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    default:
      throw new Error("Invalid color pattern");
  }
};

const similarColorForHSL = color => {
  return `hsl(${color
    .substring(4) // removes 'hsl(' (at the front)
    .slice(0, -1) // removes ')' (at the end)
    .split(",") // ex: "12, 25%, 3%" => [12, 25%, 3%]
    .map(e => {
      if (e[e.length - 1] === "%") {
        e = Number(e.slice(0, -1).trim());
        e += randomFactor;
        e = e.toString() + "%";
      }
      return e;
    })
    .join(",")})`;
}; // joins the array and returns it

const similarColorForRGBHelper = rgb => {
  rgb = rgb.map(e => `${e + randomFactor},`);
  rgb[rgb.length - 1] = rgb[rgb.length - 1].slice(0, -1);
  return rgb;
};

const similarColorForRGB = color => {
  return `rgb(${
    similarColorForRGBHelper(
      color
        .substring(4) // removes 'rgb('
        .slice(0, -1) // removes ')' at the end
        .split(",")
        .map(e => Number(e.trim()))
    ) // split into red, green and blue // adds random factor into each and
  })`; // returns in the rgb(#, #, #) format
};

const similarColorForHEX = color =>
  rgbToHex(similarColorForRGBHelper(hexToRgb(color)));

const similarColor = (color, colorPattern) => {
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      return similarColorForHSL(color);
    case values.COLOR_PATTERNS.RGB:
      return similarColorForRGB(color);
    case values.COLOR_PATTERNS.HEX:
      return similarColorForHEX(color);
    default:
      break;
  }
};

const colorsWithSimilar = (
  numberOfColors,
  numberOfSimilarColors,
  colorPattern,
  chosenOne
) => {
  const colors = [];
  const indexes = [];

  for (let index = 0; index < numberOfColors; index++) {
    colors.push(randomColor(colorPattern));
    if (index !== chosenOne) {
      indexes.push(index);
    }
  }
  for (let index = 0; index < numberOfSimilarColors; index++) {
    colors[
      indexes.pop(Math.floor(Math.random() * indexes.length) + 1)
    ] = similarColor(colors[chosenOne], colorPattern);
  }

  return colors;
};

export function getColorData(difficulty, colorPattern) {
  const numberOfColors = values.DIFFICULTIES[difficulty].numberOfColors;
  const numberOfSimilarColors = values.DIFFICULTIES[difficulty].similarColors;

  const colors = [];

  const chosenOne = Math.floor(Math.random() * numberOfColors);

  if (difficulty === 0) {
    // for difficulty 1 (no intentional similar colors)
    for (let index = 0; index < numberOfColors; index++) {
      colors.push(randomColor(colorPattern));
    }
  } else {
    colors.push(
      ...colorsWithSimilar(
        numberOfColors,
        numberOfSimilarColors,
        colorPattern,
        chosenOne
      )
    );
  }

  return { colors, chosenOne };
}
