import { GRID, NUMBERS } from 'types'
import { shuffleArray } from 'algorithm/shuffleArray'
import { isInRow } from 'algorithm/isInRow'
import { isInCol } from 'algorithm/isInCol'
import { generateSquare } from 'algorithm/generateSquare'
import { isInSquare } from 'algorithm/isInSquare'
import { isGridFilled } from 'algorithm/isGridFilled'

/**
 * Replaces zeroes with values from 1 to 9
 * @param grid 9x9 empty grid
 */

export function fillGrid(grid: GRID) {
  const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffleArray(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = generateSquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (isGridFilled(grid)) return true
              else if (fillGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }

  grid[row][col] = 0
}
