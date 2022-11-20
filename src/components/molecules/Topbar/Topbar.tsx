import { IconButton } from '@/components/atoms/IconButton'
import { useTheme } from '@/hooks'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import * as S from './styles'

export const Topbar = () => {
  const { theme, swithTheme } = useTheme()

  return (
    <S.Container>
      <S.SearchBox>
        <input type="text" name="" id="" />
      </S.SearchBox>

      <S.Icons>
        {theme.title === 'light' && (
          <IconButton onClick={swithTheme}>
            <DarkModeOutlinedIcon />
          </IconButton>
        )}
        {theme.title === 'dark' && (
          <IconButton onClick={swithTheme}>
            <LightModeOutlinedIcon />
          </IconButton>
        )}
      </S.Icons>
    </S.Container>
  )
}
