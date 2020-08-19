import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { createFilledGrid } from 'algorithm/createFilledGrid'
import { copyGrid } from 'algorithm/copyGrid'
import { removeNumbers } from 'algorithm/removeRandomNumbers'
import { RootState, CELL_COORDS, NUMBERS } from 'types'
import { compareGrids } from 'algorithm/compareGrids'

const initialState: RootState = {}

export const slice = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    createGrid: state => {
      const solvedGrid = createFilledGrid()
      const copyOfSolvedGrid = copyGrid(solvedGrid)
      const initialGrid = removeNumbers(copyOfSolvedGrid)
      const workingGrid = copyGrid(initialGrid)

      state.initialGrid = initialGrid
      state.solvedGrid = solvedGrid
      state.workingGrid = workingGrid
    },
    selectCell: (state, action: PayloadAction<CELL_COORDS>) => {
      state.selectedCell = action.payload
    },
    clearError: state => {
      state.error = undefined
    },
    fillCell: (state, action: PayloadAction<{ coords: CELL_COORDS; value: NUMBERS }>) => {
      if (state.workingGrid && state.solvedGrid) {
        if (state.solvedGrid[action.payload.coords[0]][action.payload.coords[1]] !== action.payload.value) {
          state.error = action.payload.coords
          return
        }
        state.workingGrid[action.payload.coords[0]][action.payload.coords[1]] = action.payload.value

        if (compareGrids(state.workingGrid, state.solvedGrid)) {
          alert('Completed')
        }
      }
    }
  }
})

export const rootReducer = slice.reducer

export const { createGrid, selectCell, fillCell, clearError } = slice.actions
