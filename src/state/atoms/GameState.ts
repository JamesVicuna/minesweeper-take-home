import { atom } from "recoil";
import { Game } from "../../types";

export const initialGameState: Game = {
  isPlayable: true,
  gameStarted: false,
  won: false,
};

export const gameState = atom({
  key: "gameState",
  default : initialGameState,
});
