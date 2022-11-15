export const localStorageService = {
  setItem: (key: string, item: string | object) => {
    const value = typeof item === 'object' ? JSON.stringify(item) : item
    return window.localStorage.setItem(key, value)
  },

  getItem: (key: string) => {
    const value = window.localStorage.getItem(key)

    if (!value) return
    if (typeof value === 'object') return JSON.parse(value)
    return value
  },

  removeItem: (key: string) => {
    return window.localStorage.removeItem(key)
  },
}
