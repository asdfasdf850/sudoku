import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useMousetrap from 'react-hook-mousetrap'

import { Container, Row } from 'styles/GridStyles'
import { Cell } from './Cell'
import { createGrid, fillCell, selectCell } from 'redux/rootReducer'
import { RootState, N, CELL_COORDS, GRID, INDEX, NUMBERS } from 'types'

interface State {
  selectedCell?: CELL_COORDS
  selectedCellValue: N
  solvedGrid?: GRID
}

export const Grid: FC = () => {
  const state = useSelector<RootState, State>(({ workingGrid, solvedGrid, selectedCell }) => ({
    selectedCellValue: workingGrid && selectedCell ? workingGrid[selectedCell[0]][selectedCell[1]] : 0,
    selectedCell,
    solvedGrid
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (!state.solvedGrid) {
      dispatch(createGrid())
    }
  }, [dispatch, state.solvedGrid])

  const fill = (value: NUMBERS) => {
    if (state.selectedCell && state.selectedCellValue === 0) {
      dispatch(fillCell({ coords: state.selectedCell, value }))
    }
  }

  const moveUp = () => {
    if (state.selectedCell && state.selectedCell[0] > 0) {
      dispatch(selectCell([(state.selectedCell[0] - 1) as INDEX, state.selectedCell[1]]))
    }
  }

  const moveDown = () => {
    if (state.selectedCell && state.selectedCell[0] < 8) {
      dispatch(selectCell([(state.selectedCell[0] + 1) as INDEX, state.selectedCell[1]]))
    }
  }

  const moveLeft = () => {
    if (state.selectedCell && state.selectedCell[1] > 0) {
      dispatch(selectCell([state.selectedCell[0], (state.selectedCell[1] - 1) as INDEX]))
    }
  }

  const moveRight = () => {
    if (state.selectedCell && state.selectedCell[1] < 8) {
      dispatch(selectCell([state.selectedCell[0], (state.selectedCell[1] + 1) as INDEX]))
    }
  }

  useMousetrap('1', () => fill(1))
  useMousetrap('2', () => fill(2))
  useMousetrap('3', () => fill(3))
  useMousetrap('4', () => fill(4))
  useMousetrap('5', () => fill(5))
  useMousetrap('6', () => fill(6))
  useMousetrap('7', () => fill(7))
  useMousetrap('8', () => fill(8))
  useMousetrap('9', () => fill(9))

  useMousetrap('up', moveUp)
  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)

  return (
    <Container>
      {[...Array(9)].map((_, rowIndex) => (
        <Row key={rowIndex}>
          {[...Array(9)].map((_, colIndex) => (
            <Cell key={colIndex} rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX} />
          ))}
        </Row>
      ))}
    </Container>
  )
}
