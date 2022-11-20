import { css, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      transition: background-color ${theme.transition.default},
        width ${theme.transition.fast};

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

      background-color: ${theme.colors.primary[500]};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: [ 'Roboto', 'sans-serif' ].join(',');
    }

    h1 {
      font-size: ${theme.fontSize['4xl']};
    }

    h2 {
      font-size: ${theme.fontSize['3xl']};
    }

    h3 {
      font-size: ${theme.fontSize['2xl']};
    }

    h4 {
      font-size: ${theme.fontSize.xl};
      font-weight: ${theme.font.normal};
    }

    h5 {
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.font.normal};
    }

    h6 {
      font-size: ${theme.fontSize.sm};
      font-weight: ${theme.font.normal};
    }

    .MuiIconButton-root:hover {
      background-color: ${theme.colors.iconRipple.hover};
    }

    .MuiIconButton-root .MuiTouchRipple-child {
      background-color: ${theme.colors.iconRipple.click};
    }
  `}
`

export default GlobalStyles
