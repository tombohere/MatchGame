import React, { createContext, useState } from "react";
import getGame from "./getGame.js";

const GameContext = createContext([{}, () => {}]);

window.rows = 4;
window.cols = 4;
let gameData = getGame(window.rows, window.cols);

const GameProvider = (props) => {
  const [state, setState] = useState(gameData);
  return (
    <GameContext.Provider value={[state, setState]}>
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
