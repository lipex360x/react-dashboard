import styled, { css } from 'styled-components'

type WrapperProps = {
  span?: number
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, span }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-column: span ${span};
    background: ${theme.colors.white};
    padding: 0.5rem;
    position: relative;

    border: 1px solid ${theme.colors.grey[200]};
    border-radius: 6px;

    :focus-within {
      outline: 0;
      box-shadow: 0 0 6px -2px ${theme.colors.grey[400]};
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: ${theme.fontSize.xs};
        font-style: italic;
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    border: none;
    padding: 0.5rem;
    background: ${theme.colors.white};
    color: ${theme.colors.grey[800]};

    &::placeholder {
      color: ${theme.colors.grey[400]};
    }

    :focus {
      box-shadow: none;
    }
  `}
`

export const MessageError = styled.span`
  ${({ theme }) => css`
    position: absolute;
    right: 1rem;
    bottom: 0;
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.redAccent[400]};
  `}
`
