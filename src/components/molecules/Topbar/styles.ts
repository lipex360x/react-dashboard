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

export const Icons = styled.div`
  ${({ theme }) => css`
    svg {
      font-size: ${theme.fontSize.xl};
    }
  `}
`

export const SearchBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.primary[400]};
    padding: 4px 12px;
    border: 1px solid ${theme.colors.primary[400]};
    border-radius: 4px;

    transition: border-color ${theme.transition.fast};

    :focus-within {
      border-color: ${theme.colors.primary[300]};
    }

    input {
      color: ${theme.colors.grey[100]};
      border: none;
      outline: none;

      background: transparent;
      border-radius: 4px;
      height: ${theme.spacing['3xl']};
    }
  `}
`
