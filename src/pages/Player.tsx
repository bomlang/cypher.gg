import { matchHistory } from '@/api'
import { PlayerAside, PlayerHeader, PlayerMain } from '@/components/player'
import { usePlayerPrevGameStore } from '@/zustand'
import { useEffect } from 'react'

function Player() {
  const { setGameHistory } = usePlayerPrevGameStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchData = await matchHistory(
          '6e3801b91890a2124d22b30a6d912fda',
          'normal'
        )
        console.log(matchData)
        setGameHistory(matchData)
      } catch (error) {
        console.error('Error fetching match data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <PlayerHeader />
      <div>
        <PlayerAside />
        <PlayerMain />
      </div>
    </>
  )
}

export default Player
