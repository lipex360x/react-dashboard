import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    display: flex;
    position: relative;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: ${theme.spacing.xs} ${theme.spacing.base};
  `}
`
