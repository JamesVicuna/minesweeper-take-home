import { Board, Cell, Options } from "../types";
import { getAdjacentCells } from "./getAdjacentCells";


export const revealCell = (board: Board, cell: Cell, options: Options) => {
  const { value, x, y } = cell;

  // If the cell is already revealed, stop recursion
  if (cell.isRevealed) {
    return board;
  }

  // Update the cell to be revealed and remove flag
  let result: Board = board.map((row) =>
    row.map((cell) => cell.x === x && cell.y === y ? {...cell, isRevealed: true, isFlagged: false} : cell),
  );

  // If the cell has a value greater than 0, return the updated board
  if (value > 0) {
    return result;
  }

  // If the cell has a value of 0, use recursion on each cell to call revealCell
  const adjacentCells = getAdjacentCells(
    board,
    cell,
    options.rows,
    options.columns,
  );
  adjacentCells.forEach((cell) => {
    result = revealCell(result, cell, options);
  });

  return result;
};
