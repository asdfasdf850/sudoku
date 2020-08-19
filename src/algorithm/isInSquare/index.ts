import { SQUARE, NUMBERS } from 'types'

interface Input {
  square: SQUARE
  value: NUMBERS
}

/**
 * Returns true if value is already used in square
 * @param obj Object with 3x3 square and value to check
 */

export function isInSquare({ square, value }: Input): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}
