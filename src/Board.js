import React, { useContext } from "react";
import Block from "./Block";
import { GameContext } from "./AppContext.js";

const Board = ({ cols, rows }) => {
  const [game] = useContext(GameContext);
  let itemNum = 0;

  const addBlock = () => {
    let content = [];
    for (let i = 0; i < cols; i++) {
      content.push(<Block item={itemNum} key={itemNum} />);
      itemNum++;
    }
    return content;
  };

  const addRow = () => {
    let content = [];
    for (let i = 0; i < rows; i++) {
      content.push(
        <div style={divStyle2} className="boardRow" key={(i + 1) * 1000}>
          {addBlock()}
        </div>
      );
    }
    return content;
  };

  const divStyle1 = {
    gridTemplateRows: "repeat(" + rows + ",1fr)"
  };

  const divStyle2 = {
    gridTemplateColumns: "repeat(" + cols + ",1fr)"
  };

  return (
    <>
      {game.matches === (game.rows * game.columns) / 2
        ? "All matches made!"
        : "Try to make a match "}
      <div className="Board">
        <div style={divStyle1} className="boardColumn">
          {addRow()}
        </div>
      </div>
    </>
  );
};

export default Board;
