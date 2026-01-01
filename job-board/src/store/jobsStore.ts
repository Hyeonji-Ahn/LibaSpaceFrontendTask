import { create } from 'zustand'

export type JobTab = 'matched' | 'liked' | 'applied'

type JobsState = {
  tab: JobTab
  setTab: (tab: JobTab) => void

  liked: Record<string, boolean>
  applied: Record<string, boolean>
  toggleLike: (id: string) => void
  apply: (id: string) => void
}

export const useJobsStore = create<JobsState>((set) => ({
  tab: 'matched',
  setTab: (tab) => set({ tab }),

  liked: {},
  applied: {},

  toggleLike: (id) =>
    set((s) => ({ liked: { ...s.liked, [id]: !s.liked[id] } })),

  apply: (id) =>
    set((s) => ({ applied: { ...s.applied, [id]: true } })),
}))
