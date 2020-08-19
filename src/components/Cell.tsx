import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from 'styles/CellStyles'
import { N, RootState, INDEX, CELL_COORDS } from 'types'
import { selectCell, clearError } from 'redux/rootReducer'

interface Props {
  rowIndex: INDEX
  colIndex: INDEX
}

interface State {
  cellValue: N
  isCellSelected: boolean
  isBold: boolean
  isError?: boolean
  error?: CELL_COORDS
}

export const Cell: FC<Props> = ({ rowIndex, colIndex }) => {
  const state = useSelector<RootState, State>(({ workingGrid, initialGrid, selectedCell, error }) => ({
    cellValue: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    isCellSelected: selectedCell ? selectedCell[0] === rowIndex && selectedCell[1] === colIndex : false,
    isBold: initialGrid && initialGrid[rowIndex][colIndex] !== 0 ? true : false,
    isError: error && error[0] === rowIndex && error[1] === colIndex,
    error
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (state.error === undefined) return

    setTimeout(() => dispatch(clearError()), 800)
  }, [state.error, dispatch])

  const select = () => {
    if (!state.isCellSelected) {
      dispatch(selectCell([rowIndex, colIndex]))
    }
  }

  return (
    <Container onClick={select} isSelected={state.isCellSelected} isError={state.isError} isBold={state.isBold}>
      {state.cellValue === 0 ? '' : state.cellValue}
    </Container>
  )
}
