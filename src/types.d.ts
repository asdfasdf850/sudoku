export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type N = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type CELL_COORDS = [INDEX, INDEX]

export type ROW = [N, N, N, N, N, N, N, N, N]

export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW]

export type SQUARE_ROW = [N, N, N]

export type SQUARE = [SQUARE_ROW, SQUARE_ROW, SQUARE_ROW]

export type RootState = {
  initialGrid?: GRID
  workingGrid?: GRID
  solvedGrid?: GRID
  selectedCell?: CELL_COORDS
  error?: CELL_COORDS
}
