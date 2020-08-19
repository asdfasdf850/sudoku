import styled, { css } from 'styled-components'

interface Props {
  isSelected?: boolean
  isBold?: boolean
  isError?: boolean
}

export const Container = styled.div<Props>`
  ${({ theme, isSelected, isBold, isError }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 2rem;
    height: auto;
    font-weight: ${isBold ? 'bold' : 'normal'};
    background-color: ${isError ? theme.colors.red : isSelected ? theme.colors.blue : theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    transition: ${theme.transition};
    user-select: none;

    &::before {
      content: '';
      padding-top: 100%;
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
