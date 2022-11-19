import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { IconButton } from '@/components/atoms/IconButton'
import { useTheme } from '@/hooks'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

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
        <IconButton onClick={swithTheme} style={{ color: colors.primary[100] }}>
          <DarkModeOutlinedIcon />
        </IconButton>
      )}
      {theme.title === 'dark' && (
        <IconButton onClick={swithTheme} style={{ color: colors.primary[100] }}>
          <LightModeOutlinedIcon color="inherit" />
        </IconButton>
      )}
    </S.Container>
  )
}
