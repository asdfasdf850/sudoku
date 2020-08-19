import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from 'styles/Button'
import { CELL_COORDS, N, RootState, NUMBERS } from 'types'
import { fillCell } from 'redux/rootReducer'
import { Container } from 'styles/NumberButtonsStyles'

interface State {
  selectedCell?: CELL_COORDS
  selectedCellValue: N
}

export const NumberButtons: FC = () => {
  const state = useSelector<RootState, State>(({ selectedCell, workingGrid }) => ({
    selectedCellValue: workingGrid && selectedCell ? workingGrid[selectedCell[0]][selectedCell[1]] : 0,
    selectedCell
  }))

  const dispatch = useDispatch()

  const fill = (value: NUMBERS) => {
    if (state.selectedCell && state.selectedCellValue === 0) {
      dispatch(fillCell({ coords: state.selectedCell, value }))
    }
  }

  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
        <Button key={value} onClick={() => fill(value)}>
          {value}
        </Button>
      ))}
    </Container>
  )
}
