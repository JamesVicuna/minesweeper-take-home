import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { LeaderBoard } from "./LeaderBoard";
import { OptionsBar } from "./OptionsBar";

export const PageContainer = () => {
  const [tab, setTab] = useState("minesweeper");

  const handleMinesweeperTab = () => {
    setTab("minesweeper");
  };

  const handleLeaderboardTab = () => {
    setTab("leaderboard");
  };

  return (
    <>
      <div className="h-board w-mobile-board rounded-3xl bg-slate-500 pb-4 md:w-desktop-board">
        <div className="flex h-8 w-full justify-center rounded-t-3xl">
          <div
            className={`w-1/2 rounded-tl-3xl text-center ${tab === "minesweeper" ? "bg-slate-500" : "bg-slate-400"}`}
            onClick={handleMinesweeperTab}
          >
            Minesweeper
          </div>
          <div
            className={`w-1/2 rounded-tr-3xl text-center ${tab === "leaderboard" ? "bg-slate-500" : "bg-slate-400"}`}
            onClick={handleLeaderboardTab}
          >
            Leaderboard
          </div>
        </div>
        <div className="h-full rounded-b-3xl">
          {tab === "minesweeper" ? (
            <>
              <OptionsBar />
              <div className="h-playArea flex flex-col items-center justify-center px-4">
                <GameBoard />
              </div>
            </>
          ) : (
            <LeaderBoard />
          )}
        </div>
      </div>
    </>
  );
};
