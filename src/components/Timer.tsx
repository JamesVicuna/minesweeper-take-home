import { useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameState } from "../state/atoms";
import { timeState } from "../state/atoms/TimeState";
import { Pill } from "evergreen-ui";

export const Timer = () => {
  const game = useRecoilValue(gameState);
  const [time, setTime] = useRecoilState(timeState);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (game.isPlayable && game.gameStarted) {
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  });

  return <Pill style={{
    display: 'flex',
    flexDirection: 'column',
    height: '1.5rem',
    padding: '0 1rem',
    textAlign: 'center',
    justifyContent: 'center',
  }}>{time}</Pill>;
};
