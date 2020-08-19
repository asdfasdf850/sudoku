import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { register } from 'serviceWorker'
import { theme } from 'styles/theme'
import { GlobalStyles } from 'styles/GlobalStyles'
import { Container } from 'styles/Container'
import { Title } from 'styles/Title'
import { Card } from 'styles/CardStyles'
import { Grid } from 'components/Grid'
import { NewGameButton } from 'components/NewGameButton'
import { NumberButtons } from 'components/NumberButtons'
import { store, persistor } from 'redux/store'

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Container>
            <Title>Sudoku</Title>
            <Card>
              <NewGameButton />
              <Grid />
              <NumberButtons />
            </Card>
          </Container>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)

register()
