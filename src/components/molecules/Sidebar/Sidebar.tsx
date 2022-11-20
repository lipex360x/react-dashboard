import { useState } from 'react'

import { SidebarItem } from '@/components/atoms/SidebarItem'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'

import * as S from './styles'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <S.Container isCollapsed={isCollapsed}>
      <S.Header>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>X</button>
      </S.Header>

      <SidebarItem
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />

      <SidebarItem
        title="Manage Team"
        to="/"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />

      <SidebarItem
        title="Contacts Information"
        to="/"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />
    </S.Container>
  )
}
