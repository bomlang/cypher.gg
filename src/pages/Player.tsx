import { useEffect } from 'react'
import { matchHistory, userApi } from '@/api'
import { useParams } from 'react-router-dom'
import { usePlayerPrevGameStore } from '@/zustand'
import { PlayerAside, PlayerHeader, PlayerMain } from '@/components/player'

function Player() {
  const { nickname } = useParams()

  const { setGameHistory } = usePlayerPrevGameStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi(nickname as string)

        if (userData) {
          const matchData = await matchHistory(userData.playerId, 'normal')

          setGameHistory(matchData)

          // const slice = matchData.matches.rows.slice(0, 20)
          // console.log(slice)
        }
      } catch (error) {
        console.error('Error fetching match data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="bg-gray200">
      <PlayerHeader />
      <div className="flex">
        <PlayerAside />
        <PlayerMain />
      </div>
    </main>
  )
}

export default Player
