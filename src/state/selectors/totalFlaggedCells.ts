import { selector } from "recoil";
import { boardState } from "../atoms";

export const totalFlaggedCells = selector({
  key: "totalFlaggedCells",
  get: ({ get }) => {
    const board = get(boardState);

    return board.flat().filter((cell) => cell.isFlagged === true).length;
  },
});
