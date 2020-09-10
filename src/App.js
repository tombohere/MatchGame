import React from "react";
import "./styles.css";
import { GameProvider } from "./AppContext.js";
import Game from "./Game.js";

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default App;
