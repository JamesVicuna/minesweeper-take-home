import { Board, Cell } from "../types";
import { getAdjacentCells } from "./getAdjacentCells";

const initialCell: Cell = {
  value: 0,
  isBomb: false,
  isRevealed: false,
  x: -1,
  y: -1,
  key: 0,
  isFlagged: false
};

// Returns an array of a table that represents the game board
export const createBoard = (rows: number, cols: number, bombs: number) => {
  let board: Board = [];

  // Populates board as a table with x amount of rows and y amout of columns
  for (let x = 0; x < rows; x++) {
    let row: Cell[] = [];
    for (let y = 0; y < cols; y++) {
      row.push({ ...initialCell, x, y, key: Math.random() });
    }
    board.push(row);
  }

  let bombCount = 0;
  let bombPositions = [];

  // Populates bombs on board
  while (bombCount < bombs) {
    let x = Math.floor(Math.random() * rows);
    let y = Math.floor(Math.random() * cols);

    if (board[x][y].isBomb !== true) {
      board[x][y].isBomb = true;
      bombPositions.push([x, y]);
      bombCount++;
    }
  }

  // For each bomb, each adjacent cell will get +1 to its value
  bombPositions.forEach((coordinates) => {
    let adjacentCellsToBomb = getAdjacentCells(
      board,
      board[coordinates[0]][coordinates[1]],
      rows,
      cols,
    );

    adjacentCellsToBomb.forEach((cell) => {
      let x = cell.x;
      let y = cell.y;
      board[x][y].value++;
    });
  });

  return board;
};