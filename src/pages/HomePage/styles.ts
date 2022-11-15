import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: 100vh;
    justify-content: center;
    font-size: ${theme.fontSize.xs};

    ${media.greaterThan('medium')`
      font-size: ${theme.fontSize.base}
    `}

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
