import { GRID, NUMBERS } from 'types'

interface Input {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * Returns true if value is already being used in current row
 * @param obj Object with 9x9 grid, current row index and value to check
 */

export function isInRow({ grid, row, value }: Input): boolean {
  return grid[row].includes(value)
}
