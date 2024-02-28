import { MatchData } from '@/types'

export const countPartyMembers = (game: MatchData | null) => {
  // 같이 파티한 유저 (최근 100게임동안)
  const data = game?.matches.rows.map(item => item.playInfo.partyInfo)
  const playerIds = data?.map(party => party.map(user => user.playerId))

  // Flatten the array of arrays
  const flattenedPlayerIds = playerIds?.flat()

  // Count occurrences of each playerId
  const partyCount = flattenedPlayerIds?.reduce((count, playerId) => {
    count[playerId] = (count[playerId] || 0) + 1
    return count
  }, {})

  // Convert the object to an array and sort by count in descending order
  const sortedCounts = Object.entries(partyCount || {}).sort(
    ([, count1], [, count2]) => count2 - count1
  )

  // console.log(sortedCounts)
  return sortedCounts
}
