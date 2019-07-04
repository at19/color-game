import * as values from "./values";

const _factor = Math.floor(Math.random() * 16) + 5; // between 5 - 20
const randomFactor = Math.round(Math.random()) ? _factor : -_factor;

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

const randomColorRGB = () => {
  const red =
    Math.floor(
      Math.random() * (values.MAX_RGB_VALUE - values.MIN_HSL_RGB_VALUE + 1)
    ) + values.MIN_HSL_RGB_VALUE;
  const green =
    Math.floor(
      Math.random() * (values.MAX_RGB_VALUE - values.MIN_HSL_RGB_VALUE + 1)
    ) + values.MIN_HSL_RGB_VALUE;
  const blue =
    Math.floor(
      Math.random() * (values.MAX_RGB_VALUE - values.MIN_HSL_RGB_VALUE + 1)
    ) + values.MIN_HSL_RGB_VALUE;

  return [red, green, blue];
};

const randomColor = colorPattern => {
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      const hue = Math.floor(Math.random() * values.MAX_HUE_VALUE) + 1;
      const saturation =
        Math.floor(
          Math.random() *
            (values.MAX_SATURATION_VALUE - values.MIN_HSL_RGB_VALUE + 1)
        ) + values.MIN_HSL_RGB_VALUE;
      const lightness =
        Math.floor(
          Math.random() *
            (values.MAX_LIGHTNESS_VALUE - values.MIN_HSL_RGB_VALUE + 1)
        ) + values.MIN_HSL_RGB_VALUE;
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // saturation and lightness is between
    // MIN_HSL_RGB_VALUE and the corresponding MAX value
    case values.COLOR_PATTERNS.RGB:
      return `rgb(${randomColorRGB()})`;

    case values.COLOR_PATTERNS.HEX:
      const rgb = randomColorRGB();
      return (
        "#" +
        rgb
          .map(e => {
            e = e.toString(16);
            return e.length === 1 ? (e += "0") : e;
          })
          .join("")
      );
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
    ).join("") // split into red, green and blue // adds random factor into each and
  })`; // returns in the rgb(#, #, #) format
};

const similarColorForHEX = color =>
  "#" +
  similarColorForRGBHelper(hexToRgb(color))
    .map(e => {
      e = e.endsWith(",") ? e.slice(0, -1) : e;
      return Number(e)
        .toString(16)
        .padStart(2, "0");
    })
    .join("");

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

  console.log(colors);
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
