import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.xs} 0;

    a {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  `}
`
