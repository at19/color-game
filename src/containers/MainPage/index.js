import React from "react";
import "./styles.css";

import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

const MainPage = ({ signOut, handleColorModelChange, leaderboardContent }) => {
  return (
    <div>
      <NavBar signOut={signOut} />
      <Hero handleColorModelChange={handleColorModelChange} />
      <Leaderboard
        getContent={colorPattern => leaderboardContent(colorPattern)}
      />
    </div>
  );
};

export default MainPage;
