import { useState } from 'react'

import * as S from './styles'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <S.Container isCollapsed={isCollapsed}>
      <S.Header>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>X</button>
      </S.Header>
    </S.Container>
  )
}
