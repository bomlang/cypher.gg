import { rankApi } from '@/api'
import { mostChar } from '@/api/mostChar'
import { Rank } from '@/types'

export const rankData = async () => {
  try {
    const res = await rankApi()
    const playerIds = res.map((item: Rank) => item.playerId)

    const matchHistoryResults = await Promise.all(
      playerIds.map(async (playerId: string) => mostChar(playerId))
    )

    console.log(matchHistoryResults)
    return matchHistoryResults
  } catch (error) {
    console.error('예상치 못한 에러가 발생하였습니다🥺 :', error)
  }
}
