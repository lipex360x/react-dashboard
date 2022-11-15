import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 60px;
    height: 100%;

    font-size: ${theme.fontSize.base};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSize.base};
    `}

    h1 {
      color: ${theme.colors.blueAccent[300]};
    }
    img {
      width: 48px;
      height: 48px;
    }
  `}
`

export const State = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`
