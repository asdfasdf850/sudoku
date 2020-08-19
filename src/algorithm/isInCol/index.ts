import { GRID, NUMBERS } from 'types'

interface Input {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 * Returns true if value is already used in column
 * @param obj Object with 9x9 grid, current column index and value to be checked
 */

export function isInCol({ grid, col, value }: Input): boolean {
  for (let row = 0; row < 9; row++) {
    if (grid[row][col] === value) {
      return true
    }
  }
  return false
}
