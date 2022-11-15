import { produce } from 'immer'
import create from 'zustand'

export type UseCountProps = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCount = create<UseCountProps>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),

  decrement: () => {
    set((state) => {
      return produce(state, (draft) => {
        if (draft.count === 0) return
        draft.count -= 1
      })
    })
  },

  reset: () => set({ count: 0 }),
}))
