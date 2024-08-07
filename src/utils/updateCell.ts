import { Board } from "../types";

// Updates a single cell on the board and returns the whole updated board
export const updateCell = (
  board: Board,
  x: number,
  y: number,
  key: string,
  value: number | boolean
) => {
  let result: Board = board;

  result = result.map((row) =>
    row.map((cell) =>
      cell.x === x && cell.y === y ? { ...cell, [key]: value } : cell
    )
  );

  return result;
};
