import styled, { css } from 'styled-components'

import { IconButton } from '@mui/material'

export const Container = styled(IconButton)`
  ${({ theme }) => css`
    &.MuiIconButton-root:hover {
      background-color: ${theme.colors.iconRipple.hover};
    }

    &.MuiIconButton-root .MuiTouchRipple-child {
      background-color: ${theme.colors.iconRipple.click};
    }
  `}
`
