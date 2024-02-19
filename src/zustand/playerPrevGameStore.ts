import { MatchData } from '@/types'
import { create } from 'zustand'

interface PlayerPrevGameStore {
  gameHistory: MatchData | null
  setGameHistory: (metchData: MatchData | null) => void
}
export const usePlayerPrevGameStore = create<PlayerPrevGameStore>(set => ({
  gameHistory: null,
  setGameHistory: metchData => set({ gameHistory: metchData })
}))
