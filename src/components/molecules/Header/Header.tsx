import { Moon, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Button } from '@/components/atoms/Button'
import { useTheme } from '@/hooks'

import * as S from './styles'

export const Header = () => {
  const { colors } = useContext(ThemeContext)
  const { theme, swithTheme } = useTheme()

  return (
    <S.Container>
      {theme.title === 'light' && (
        <Button variant="minimal">
          <Moon
            size={32}
            weight="light"
            color={colors.blueAccent[100]}
            onClick={swithTheme}
          />
        </Button>
      )}
      {theme.title === 'dark' && (
        <Button variant="minimal">
          <Sun
            size={32}
            weight="light"
            color={colors.blueAccent[100]}
            onClick={swithTheme}
          />
        </Button>
      )}
    </S.Container>
  )
}
