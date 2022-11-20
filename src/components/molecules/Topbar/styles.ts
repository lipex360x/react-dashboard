import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 40px;
  `}
`

export const Icons = styled.div``

export const SearchBox = styled.div`
  ${({ theme }) => css`
    input {
      background: ${theme.colors.primary[400]};
      border: none;
      border-radius: 4px;
      height: 30px;
    }
  `}
`
