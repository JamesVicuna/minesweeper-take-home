import { useRecoilValue, useRecoilState } from "recoil";
import { Cell } from "../types";
import { revealCell, endGame, updateCell } from "../utils";
import { boardState, gameState, optionsState } from "../state/atoms";

export const CellComponent = ({ cell }: { cell: Cell }) => {
  const { value, isBomb, isRevealed, x, y, isFlagged } = cell;
  const [board, setBoard] = useRecoilState(boardState);
  const [game, setGame] = useRecoilState(gameState);
  const options = useRecoilValue(optionsState);

  const handleClick = () => {
    // Checks if game is over
    if (!game.isPlayable) {
      return;
    }

    if (!game.gameStarted) {
      setGame((game) => {
        return {
          ...game,
          gameStarted: true,
        };
      });
    }

    // Reveals clicked cell and adjacent value 0 cells
    setBoard((board) => revealCell(board, cell, options));

    // Reveals all bombs and ends the game if the cell is a bomb
    if (isBomb) {
      const bombCells = board.flat().filter((cell) => cell.isBomb === true);

      bombCells.forEach((cell) => {
        setBoard((board) => revealCell(board, cell, options));
      });

      setGame(endGame(game));
    }
  };
  
  const handleRightClick = (e: any) => {
    e.preventDefault();
    if (!game.isPlayable) {
      return;
    }
    if (isFlagged) {
      setBoard((board) => updateCell(board, x, y, "isFlagged", false));
    }
    if (!isFlagged && !isRevealed) {
      setBoard((board) => updateCell(board, x, y, "isFlagged", true));
    }
  };

  const setBackgroundColor = () => {
    if (isFlagged) {
      return "bg-purple-400";
    }

    if (isBomb && isRevealed) {
      return "bg-red-400";
    }

    if (isRevealed) {
      return "bg-green-300";
    }

    return "bg-yellow-300";
  };


  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-md text-black ${setBackgroundColor()} `}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {isRevealed && value > 0 && !isBomb ? value : ""}
    </div>
  );
};
