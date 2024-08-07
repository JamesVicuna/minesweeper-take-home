import { atom } from "recoil";
import { createBoard } from "../../utils/createBoard";

export const boardState = atom(({
    key: "boardState",
    default: createBoard(10, 10, 10)

}))