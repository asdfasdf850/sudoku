import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Button } from 'styles/Button'
import { createGrid } from 'redux/rootReducer'

export const NewGameButton: FC = () => {
  const dispatch = useDispatch()

  const createNewGrid = () => {
    if (window.confirm('Are you sure you want to start new game?')) {
      dispatch(createGrid())
    }
  }

  return <Button onClick={createNewGrid}>New Game</Button>
}
