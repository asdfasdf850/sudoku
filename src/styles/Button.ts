import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    min-height: 4rem;
    opacity: 0.9;
    border-radius: 3px;
    transition: ${theme.transition};

    &:focus {
      outline: none;
    }
  `}
`
