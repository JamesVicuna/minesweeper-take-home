import { useState } from "react";
import { Timer } from "./Timer";
import {
  initialGameState,
  boardState,
  gameState,
  timeState,
  optionsState,
} from "../state/atoms";
import { createBoard } from "../utils";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { Options } from "../types";
import { OptionsSelector } from "./OptionsSelector";
import { Pill, IconButton, PlayIcon } from "evergreen-ui";
import { flaggedBombCount } from "../state/selectors/flaggedBombCount";

export const OptionsBar = () => {
  const setBoard = useSetRecoilState(boardState);
  const setGame = useSetRecoilState(gameState);
  const setTime = useSetRecoilState(timeState);
  const [options, setOptions] = useRecoilState(optionsState);
  const [newGameOptions, setNewGameOptions] = useState<Options>(options);
  const flaggedBombCountState = useRecoilValue(flaggedBombCount);

  const newGame = () => {
    setBoard(
      createBoard(
        newGameOptions.rows,
        newGameOptions.columns,
        newGameOptions.bombs,
      ),
    );
    setOptions(newGameOptions);
    setGame(initialGameState);
    setTime(0);
  };

  return (
    <div
      id="optionsBar"
      className="flex w-full flex-col items-center justify-center gap-4 pt-4"
    >
      <div className="flex gap-6">
        <OptionsSelector
          min={5}
          max={15}
          selectedValue={newGameOptions.rows}
          updateKey="rows"
          label="Rows"
          setNewGameOptions={setNewGameOptions}
        />
        <OptionsSelector
          min={5}
          max={15}
          selectedValue={newGameOptions.columns}
          updateKey="columns"
          label="Columns"
          setNewGameOptions={setNewGameOptions}
        />
        <OptionsSelector
          min={5}
          max={25}
          selectedValue={newGameOptions.bombs}
          updateKey="bombs"
          label="Bombs"
          setNewGameOptions={setNewGameOptions}
        />
      </div>
      <div className="flex items-center justify-between gap-8">
        <Timer />
        <IconButton onClick={newGame} icon={PlayIcon}></IconButton>
        <Pill
          style={{
            display: "flex",
            flexDirection: "column",
            height: "1.5rem",
            padding: "0 1rem",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {flaggedBombCountState}
        </Pill>
      </div>
    </div>
  );
};
