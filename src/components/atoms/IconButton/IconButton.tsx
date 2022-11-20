import { ReactNode } from 'react'

import { IconButtonProps as MuiIconButtonProps } from '@mui/material'

import * as S from './styles'

export type IconButtonProps = {
  children: ReactNode
} & MuiIconButtonProps

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <S.Container color="inherit" {...props}>
      {children}
    </S.Container>
  )
}
