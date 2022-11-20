import { Link } from 'react-router-dom'

import * as S from './styles'

export type SidebarItemProps = {
  title: string
  to: string
  icon: JSX.Element
  selected: string
  setSelected: (title: string) => void
  isCollapesed: boolean
}

export const SidebarItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  isCollapesed,
}: SidebarItemProps) => {
  return (
    <Link to={to} onClick={() => setSelected(title)}>
      <S.Item isActive={selected === title} isCollapesed={isCollapesed}>
        {icon}
        {!isCollapesed && <span>{title}</span>}
      </S.Item>
    </Link>
  )
}
