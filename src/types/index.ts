export type Board = Cell[][];

export type Cell = {
  value: number;
  isBomb: boolean;
  isRevealed: boolean;
  x: number;
  y: number;
  key: number;
  isFlagged: boolean;
};

export type Options = {
  rows: number;
  columns: number;
  bombs: number;
};

export type Game = {
  isPlayable: boolean;
  gameStarted: boolean;

  won: boolean;
};
