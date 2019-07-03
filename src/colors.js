import * as values from "./values";

const randomFactor = Math.floor(Math.random() * 10);

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
    .split(")")[0] // removes ')' (at the end)
    .split(",") // ex: "12, 25%, 3%" => [12, 25%, 3%]
    .map(e => {
      if (e[e.length - 1] === "%") {
        e = Number(e.slice(0, -1).trim());
        e += Math.round(Math.random()) ? -randomFactor : randomFactor;
        e = e.toString() + "%";
      }
      return e;
    })
    .join(",")})`;
}; // joins the array and returns it

const similarColorForRGB = color => {
  color
    .substring(4)
    .split(")")[0]
    .split(",")
    .map(e => console.log(e.trim()));
};

const similarColor = (color, colorPattern) => {
  switch (colorPattern) {
    case values.COLOR_PATTERNS.HSL:
      return similarColorForHSL(color);
    case values.COLOR_PATTERNS.RGB:
      return similarColorForRGB(color);
    case values.COLOR_PATTERNS.HEX:
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
