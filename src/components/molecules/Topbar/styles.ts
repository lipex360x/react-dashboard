import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 40px;

    input {
      background: ${theme.colors.primary[400]};
      border: none;
      border-radius: 4px;
      height: 30px;
    }

    a {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  `}
`
