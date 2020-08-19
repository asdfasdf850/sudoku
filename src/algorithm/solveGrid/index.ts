import { GRID, NUMBERS } from 'types'
import { isInRow } from 'algorithm/isInRow'
import { isInCol } from 'algorithm/isInCol'
import { generateSquare } from 'algorithm/generateSquare'
import { isInSquare } from 'algorithm/isInSquare'
import { isGridFilled } from 'algorithm/isGridFilled'
import { global } from 'algorithm/global'

/**
 * A backtracking/recursive function to check all possible combinations of numbers until a solution is found
 * @param grid 9x9 grid consisting of values from 0 to 9
 */

export function solveGrid(grid: GRID) {
  const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = generateSquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (isGridFilled(grid)) {
                global.counter++
                break
              } else if (solveGrid(grid)) return true
            }
          }
        }
      }
      break
    }
  }
  grid[row][col] = 0
}
