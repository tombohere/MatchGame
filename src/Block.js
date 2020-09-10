import React, { useContext } from "react";
import { GameContext } from "./AppContext.js";
import cardFlipSound from "./media/page-flip-01a.mp3";
import beepSound from "./media/beep-08b.mp3";

const Block = ({ item }) => {
  const [game, setGame] = useContext(GameContext);
  const cardFlipPlay = new Audio(cardFlipSound);
  const beepPlay = new Audio(beepSound);

  const flip = () => {
    if (game.num_selected < 2) {
      let temp = game.flipped;
      temp[item] = true;
      setGame({ ...game, flipped: temp, num_selected: game.num_selected + 1 });
      if (game.num_selected === 0) {
        // 1st card selected
        cardFlipPlay.play();
        setGame({
          ...game,
          flipped: temp,
          num_selected: game.num_selected + 1,
          selected_item: item
        });
      } else {
        // 2nd card selected
        cardFlipPlay.play();
        setGame({
          ...game,
          flipped: temp,
          num_selected: game.num_selected + 1
        });
        setTimeout(() => {
          let temp2 = game.flipped;
          let matches = 0;
          if (game.board[game.selected_item] === game.board[item]) {
            beepPlay.play();
            temp2[game.selected_item] = temp2[item] = undefined;
            matches = 1;
          } else {
            temp2[game.selected_item] = temp2[item] = false;
          }
          setGame({
            ...game,
            flipped: temp2,
            num_selected: 0,
            matches: game.matches + matches
          });
        }, 1400);
      }
    }
  };

  return (
    <div className="flipper">
      {game.flipped[item] !== undefined ? (
        <>
          <div
            className="BlockBlank"
            onClick={flip}
            style={{
              transform: game.flipped[item]
                ? "rotateY(-180deg)"
                : "rotateY(0deg)"
            }}
          ></div>
          <div
            className="Block"
            style={{
              transform: game.flipped[item]
                ? "rotateY(0deg)"
                : "rotateY(-180deg)"
            }}
          >
            {game.board[item]}
          </div>
        </>
      ) : (
        <div className="Empty"></div>
      )}
    </div>
  );
};

export default Block;
