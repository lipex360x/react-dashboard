import { useState } from 'react'

import { IconButton } from '@/components/atoms/IconButton'
import { SidebarItem } from '@/components/atoms/SidebarItem'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'

import * as S from './styles'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <S.Container isCollapsed={isCollapsed}>
      <S.Header>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
      </S.Header>

      <SidebarItem
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />
      <S.Divisor>Data</S.Divisor>

      <SidebarItem
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />

      <SidebarItem
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />
    </S.Container>
  )
}
