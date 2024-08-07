import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellComponent } from "./CellComponent";
import { boardState, optionsState, gameState } from "../state/atoms";
import { totalFlaggedCells } from "../state/selectors/totalFlaggedCells";
import { checkWin, endGame } from "../utils";
import { Board } from "../types";
import { Dialog, TextInput } from "evergreen-ui";

export const GameBoard = () => {
  const board = useRecoilValue<Board>(boardState);
  const totalFlaggedCellsState = useRecoilValue(totalFlaggedCells);
  const { bombs } = useRecoilValue(optionsState);
  const [game, setGame] = useRecoilState(gameState);
  const [winDialog, setWinDialog] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (game.isPlayable && totalFlaggedCellsState === bombs) {
      const winCheck = checkWin(board);

      if (winCheck) {
        setGame(endGame(game));
        console.log("WOOHOO YOU WON");
        setWinDialog(true)
      }
    }
  }, [game, totalFlaggedCellsState, bombs, board, setGame]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {board.map((row, i) => (
          <div key={i} className="flex gap-1 py-1">
            {row.map((cell) => (
              <CellComponent key={cell.key} cell={cell} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => setWinDialog(true)}>test</button>

      <Dialog
        isShown={winDialog}
        title="You won, congratulations!"
        onCloseComplete={() => setWinDialog(false)}
        confirmLabel="Save"
        onConfirm={(close) => {
          console.log('hello')
          close()
        }}
      >
        Save to our match history
        <div className="py-2">
          <TextInput
            placeholder="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            width={140}
          />
        </div>
      </Dialog>
    </>
  );
};
