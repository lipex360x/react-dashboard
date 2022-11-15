import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { useTheme } from '@/hooks'
import { PublicRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'

export function App() {
  const { theme, defaultTheme } = useTheme()
  const localTheme = theme as DefaultTheme

  useEffect(() => {
    defaultTheme()
  }, [defaultTheme])

  return (
    <ThemeProvider theme={localTheme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
