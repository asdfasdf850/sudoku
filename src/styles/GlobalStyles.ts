import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }

      html {
        height: 100%;
        font-size: 62.5%;
        box-sizing: border-box;
      }

      body {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      #root {
        height: 100%;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        padding: 1.5rem;

        @media only screen and (max-width: 600px) {
          padding: 0;
        }
      }
    `}
`
