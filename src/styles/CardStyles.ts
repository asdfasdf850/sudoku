import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: fit-content;
    padding: 1.5rem;

    @media screen and (max-width: 600px) {
      padding: 1rem;
    }
  `}
`
