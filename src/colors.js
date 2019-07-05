import * as values from "./values";

const randomFactor = () => {
  const _factor = randomNumber(5, 20);
  return Math.round(Math.random()) ? _factor : -_factor;
};

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomRGB = () =>
  randomNumber(values.MIN_HSL_RGB_VALUE, values.MAX_RGB_VALUE);

const randomColorRGBArray = () =>
  Array.from({ length: 3 }).map(() => randomRGB());

const randomColorRGB = () => `rgb(${randomColorRGBArray()})`;

const randomColorHSL = () => {
  const hue = randomNumber(1, values.MAX_HUE_VALUE);
  const saturation = randomNumber(
    values.MIN_HSL_RGB_VALUE,
    values.MAX_SATURATION_VALUE
  );
  const lightness = randomNumber(
    values.MIN_HSL_RGB_VALUE,
    values.MAX_LIGHTNESS_VALUE
  );
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const randomColorHEX = () => {
  const rgb = randomColorRGBArray();
  return (
    "#" +
    rgb
      .map(e => {
        e = e.toString(16);
        return e.length === 1 ? (e += "0") : e;
      })
      .join("")
  );
};

const randomColor = colorPattern => {
  let randomColor;
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      randomColor = randomColorHSL();
      break;
    case values.COLOR_PATTERNS.RGB:
      randomColor = randomColorRGB();
      break;
    case values.COLOR_PATTERNS.HEX:
      randomColor = randomColorHEX();
      break;
    default:
      throw new Error("Invalid color pattern");
  }
  return randomColor;
};

const similarColorForHSL = color => {
  return `hsl(${color
    .substring(4) // removes 'hsl(' (at the front)
    .slice(0, -1) // removes ')' (at the end)
    .split(",") // ex: "12, 25%, 3%" => [12, 25%, 3%]
    .map(e => {
      if (e[e.length - 1] === "%") {
        e = Number(e.slice(0, -1).trim());
        e += randomFactor();
        e = e.toString() + "%";
      }
      return e;
    })
    .join(",")})`;
}; // joins the array and returns it

const similarColorForRGBHelper = rgb => {
  rgb = rgb.map(e => `${e + randomFactor()},`);
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
  let similarColor;
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      similarColor = similarColorForHSL(color);
      break;
    case values.COLOR_PATTERNS.RGB:
      similarColor = similarColorForRGB(color);
      break;
    case values.COLOR_PATTERNS.HEX:
      similarColor = similarColorForHEX(color);
      break;
    default:
      break;
  }
  return similarColor;
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
