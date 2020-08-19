import 'styled-components'

export const theme = {
  colors: {
    background: 'radial-gradient(#5643facc, #5643fa)',
    black: '#000',
    blue: '#a0e9fd',
    lightBlue: '#caf3fe',
    red: '#fc8686',
    white: '#eee'
  },
  transition: '0.3s'
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
