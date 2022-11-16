import { Moon, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useTheme } from '@/hooks'

import * as S from './styles'

export const Topbar = () => {
  const { colors } = useContext(ThemeContext)
  const { theme, swithTheme } = useTheme()

  return (
    <S.Container>
      <div>
        <input type="text" name="" id="" />
      </div>

      {theme.title === 'light' && (
        <a onClick={swithTheme}>
          <Moon size={24} weight="light" color={colors.primary[100]} />
        </a>
      )}
      {theme.title === 'dark' && (
        <a onClick={swithTheme}>
          <Sun size={24} weight="light" color={colors.primary[100]} />
        </a>
      )}
    </S.Container>
  )
}
