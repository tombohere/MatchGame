import React, { useContext } from "react";
import { GameContext } from "./AppContext.js";
import Choose from "./Choose.js";
import Board from "./Board.js";

const Game = () => {
  const [game] = useContext(GameContext);

  return (
    <div className="App">
      <Choose />
      <Board cols={game.columns} rows={game.rows} />
    </div>
  );
};

export default Game;
