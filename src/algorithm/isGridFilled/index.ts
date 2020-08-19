import { GRID } from 'types'

/**
 * Returns true if there is no zeroes in grid
 * @param grid 9x9 grid
 */

export function isGridFilled(grid: GRID): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        return false
      }
    }
  }
  return true
}
