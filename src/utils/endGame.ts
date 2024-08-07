import { Game } from "../types";


export const endGame = (game: Game) => {
    return {
        ...game,
        isPlayable: false
    }
}