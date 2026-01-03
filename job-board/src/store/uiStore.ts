import { create } from 'zustand'

type UIState = {
  fitUnlocked: boolean
  unlockFit: () => void
  lockFit: () => void
}

export const useUIStore = create<UIState>((set) => ({
  fitUnlocked: false,
  unlockFit: () => set({ fitUnlocked: true }),
  lockFit: () => set({ fitUnlocked: false }),
}))
