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
    flex: 4;
    flex-direction: column;
    gap: ${theme.spacing['3xl']};
    padding: ${theme.spacing.xs} ${theme.spacing.base};
    margin-bottom: ${theme.spacing.xl};
  `}
`
