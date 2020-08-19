import { GRID } from 'types'

/**
 * Makes copy of grid to accept
 * @param grid 9x9 grid
 */

export function copyGrid(grid: GRID): GRID {
  const gridCopy: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      gridCopy[row][col] = grid[row][col]
    }
  }
  return gridCopy
}
