import { GRID } from 'types'
import { getRandomIndex } from 'algorithm/getRandomIndex'
import { copyGrid } from 'algorithm/copyGrid'
import { global } from 'algorithm/global'
import { solveGrid } from 'algorithm/solveGrid'

/**
 * Removes numbers from filled grid to create Sudoku puzzle
 * @param grid 9x9 grid
 * @param attempts number of attempts to solve (higher means more difficult)
 */

export function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }

  return grid
}
