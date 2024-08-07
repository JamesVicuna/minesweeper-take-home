import { selector } from "recoil";
import { boardState } from "../atoms";

export const flaggedBombCount = selector({
  key: "flaggedBombCount",
  get: ({ get }) => {
    const board = get(boardState);

    const totalFlagged = board.flat().filter((cell) => cell.isFlagged === true).length;
    const totalBombs = board.flat().filter((cell) => cell.isBomb === true).length;

    return totalBombs - totalFlagged
  },
});
