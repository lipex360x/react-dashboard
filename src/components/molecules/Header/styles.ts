import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};

    h2 {
      text-transform: uppercase;
    }

    h5 {
      color: ${theme.colors.greenAccent[400]};
    }
  `}
`
