import create from 'zustand'

import { localStorageService } from '@/services/'
import dark from '@/styles/themes/dark'
import light from '@/styles/themes/light'

interface UseThemeProviderProps {
  theme: typeof light | typeof dark
  defaultTheme: () => void
  swithTheme: () => void
}

export const useTheme = create<UseThemeProviderProps>((set) => ({
  theme: dark,
  defaultTheme: () => {
    set((state) => {
      const getTheme = localStorageService.getItem('theme')

      const setTheme = !getTheme
        ? state.theme
        : getTheme === 'dark'
        ? dark
        : light

      localStorageService.setItem('theme', setTheme.title)

      return { theme: setTheme }
    })
  },

  swithTheme: () => {
    set(() => {
      const getTheme = localStorageService.getItem('theme')

      const setTheme = getTheme === 'dark' ? light : dark

      localStorageService.setItem('theme', setTheme.title)

      return { theme: setTheme }
    })
  },
}))
