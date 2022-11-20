import { IconButton } from '@/components/atoms/IconButton'
import { useTheme } from '@/hooks'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

import * as S from './styles'

export const Topbar = () => {
  const { theme, swithTheme } = useTheme()

  return (
    <S.Container>
      <S.SearchBox>
        <input type="text" name="" placeholder="search..." />
        <SearchIcon />
      </S.SearchBox>

      <S.Icons>
        <IconButton onClick={swithTheme}>
          {theme.title === 'light' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={() => {}}>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton onClick={() => {}}>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton onClick={() => {}}>
          <PersonOutlinedIcon />
        </IconButton>
      </S.Icons>
    </S.Container>
  )
}
