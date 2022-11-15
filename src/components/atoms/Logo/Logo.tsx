import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { React } from '@/components/atoms/Icons'

export const Logo = () => {
  const { colors } = useContext(ThemeContext)
  return <React width={96} height={96} color={colors.blueAccent[300]} />
}
