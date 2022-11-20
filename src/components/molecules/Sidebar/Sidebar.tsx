import { useState } from 'react'

import { SidebarItem } from '@/components/atoms/SidebarItem'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

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
        title="Home"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />

      <SidebarItem
        title="Home"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />

      <SidebarItem
        title="Home"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        isCollapesed={isCollapsed}
      />
    </S.Container>
  )
}
