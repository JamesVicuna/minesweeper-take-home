import { Board } from "../types";

export const checkWin = (board: Board) => {
  const bombCells = board.flat().filter((cell) => cell.isBomb === true);
  const winCheck = bombCells.every((cell) => cell.isFlagged);

  return winCheck;
};
