import { css, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    [disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.default};
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.font.normal};
      line-height: ${theme.lineHeight.base};
    }

    button {
      cursor: pointer;
    }

    body {
      font-family: ${theme.font.default};
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.font.normal};
      line-height: ${theme.lineHeight.base};
      color: ${theme.colors.primary[100]};

      background-color: ${theme.colors.primary[400]};
      transition: background-color ${theme.transition.fast};
    }
  `}
`

export default GlobalStyles
