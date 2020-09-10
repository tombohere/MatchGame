import React, { useEffect, useContext } from "react";
import { GameContext } from "./AppContext.js";
import getGame from "./getGame.js";
import modVars from "./modVars.js";

const Choose = () => {
  const [, setGame] = useContext(GameContext);

  useEffect(() => {
    const resizeHandler = () => {
      modVars();
    };
    window.addEventListener("resize", resizeHandler);
  }, []);

  const change = (rows, cols) => {
    let x = document.getElementsByClassName("Block");
    for (let i = 0; i < x.length; i++) x[i].classList.add("NoTransition");
    window.rows = rows;
    window.cols = cols;
    setGame(getGame(rows, cols));
    setTimeout(() => {
      x = document.getElementsByClassName("Block");
      for (let i = 0; i < x.length; i++) x[i].classList.remove("NoTransition");
    }, 500);
  };

  return (
    <div className="Choose">
      <div onClick={() => change(2, 2)}>2x2</div>
      <div onClick={() => change(4, 4)}>4x4</div>
      <div onClick={() => change(6, 6)}>6x6</div>
      <div onClick={() => change(8, 8)}>8x8</div>
      <div onClick={() => change(10, 10)}>10x10</div>
    </div>
  );
};

export default Choose;
