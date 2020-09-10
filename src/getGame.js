import items from "./items.js";
import modVars from "./modVars.js";

const getGame = (rows, cols) => {
  let board = [];
  let flipped = [];
  let check = [];
  let temp = 0;

  for (let i = 0; i < cols * rows; i++) {
    flipped[i] = false;
  }
  for (let i = 0; i < (cols * rows) / 2; i++) {
    do {
      temp = Math.floor(Math.random() * (cols * rows));
    } while (check[temp] !== undefined);
    check[temp] = 1;
    board[temp] = items[i];
    do {
      temp = Math.floor(Math.random() * (cols * rows));
    } while (check[temp] !== undefined);
    check[temp] = 1;
    board[temp] = items[i];
  }

  modVars();

  return {
    board,
    flipped,
    gameChose: true,
    columns: cols,
    rows: rows,
    num_selected: 0,
    selected_item: "",
    matches: 0
  };
};

export default getGame;
