import React, { useState } from "react";
import "./Play.css";

import Colors from "../Colors/Colors";
import Header from "../Header/Header";

import Modal from "../../components/Modal/Modal";

import * as values from "../../values";
import { getColorData } from "../../colors";

const Play = props => {
  // useState
  const [points, setPoints] = useState(values.MIN_POINTS);
  const [difficulty, setDifficulty] = useState(values.ENTRY_DIFFICULTY);
  const [triesLeft, setTriesLeft] = useState(values.MAX_TRIES);
  const [colorData, setColorData] = useState(
    getColorData(difficulty, props.colorPattern)
  );
  const [gameOver, setGameOver] = useState(false);

  const gameOverModal = () =>
    gameOver ? <Modal points={points} playAgain={playAgain} /> : null;

  function gotCorrectAnswer() {
    let newPoints = points + values.POINTS_ADDITION;
    let newDifficulty = 0;
    const oldDifficulty = difficulty;

    if (newPoints >= values.DIFFICULTIES[4].minimumPoints) {
      newDifficulty = 4;
    } else if (newPoints >= values.DIFFICULTIES[3].minimumPoints) {
      newDifficulty = 3;
    } else if (newPoints >= values.DIFFICULTIES[2].minimumPoints) {
      newDifficulty = 2;
    } else if (newPoints >= values.DIFFICULTIES[1].minimumPoints) {
      newDifficulty = 1;
    }

    if (oldDifficulty !== newDifficulty) {
      setTriesLeft(values.MAX_TRIES);
    }

    setPoints(newPoints);
    setDifficulty(newDifficulty);

    resetColors(newDifficulty);
  }

  function gotWrongAnswer(clickedIndex) {
    if (colorData.colors[clickedIndex] !== values.BACKGROUND_COLOR) {
      const newColors = [...colorData.colors];
      newColors[clickedIndex] = values.BACKGROUND_COLOR;
      setColorData({
        ...colorData,
        colors: newColors
      });

      const newTriesLeft = triesLeft - 1;
      setTriesLeft(newTriesLeft);
      if (newTriesLeft === 0) setGameOver(true);
    }
  }

  function resetColors(difficulty) {
    setColorData(getColorData(difficulty, props.colorPattern));
  }

  function playAgain() {
    setGameOver(false);
    setDifficulty(values.ENTRY_DIFFICULTY);
    setPoints(values.MIN_POINTS);
    setTriesLeft(values.MAX_TRIES);
    setColorData(getColorData(values.ENTRY_DIFFICULTY, props.colorPattern));
  }

  function onColorsClick(e) {
    if (triesLeft > 0) {
      e.preventDefault();
      const clickedIndex = Number(e.target.id);
      if (e.target.className === "tile") {
        if (clickedIndex === colorData.chosenOne) {
          gotCorrectAnswer();
        } else {
          gotWrongAnswer(clickedIndex);
        }
      }
    }
  }

  return (
    <div className="Play">
      <Header
        headerColor={values.DIFFICULTIES[difficulty].headerColor}
        chosenColor={colorData.colors[colorData.chosenOne]}
        resetColors={() =>
          values.DIFFICULTIES[difficulty].canLoadNewColors
            ? resetColors(difficulty)
            : null
        }
        triesLeft={triesLeft}
      />
      <Colors colors={colorData.colors} onClick={e => onColorsClick(e)} />
      {gameOverModal()}
    </div>
  );
};

export default Play;
