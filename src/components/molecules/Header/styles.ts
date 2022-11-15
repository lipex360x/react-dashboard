import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    padding: ${theme.spacing.lg};
    display: flex;
    justify-content: end;
  `}
`
