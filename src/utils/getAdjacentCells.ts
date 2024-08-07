import { Board, Cell } from "../types";

export const getAdjacentCells = (
  board: Board,
  cell: Cell,
  totalRows: number,
  totalCols: number,
) => {
  let adjacentCells: Cell[] = [];

  const { x, y } = cell;

  for (
    let rowPosition = x > 0 ? -1 : 0; // Starts at -1 if x is not against a top wall, otherwise starts at 0 if against top wall
    rowPosition <= (x < totalRows - 1 ? 1 : 0); // Ends at 1 if x is not againt bottom wall, otherwise ends at 0 if against bottom wall
    rowPosition++
  ) {
    for (
      let colPosition = y > 0 ? -1 : 0; // Same as rowPos but from left to right wall
      colPosition <= (y < totalCols - 1 ? 1 : 0);
      colPosition++
    ) {
      adjacentCells.push(board[rowPosition + x][colPosition + y]);
    }
  }

  return adjacentCells;
};
