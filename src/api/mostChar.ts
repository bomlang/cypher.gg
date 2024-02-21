import { Match } from '@/types'
import { matchHistory } from '.'

export const mostChar = async (playerId: string) => {
  try {
    const response = await matchHistory(playerId, 'nomal')

    const tierName = response?.tierName
    console.log(tierName)

    const matches = response.matches.rows

    const characters = matches.map(
      (item: Match) => item.playInfo?.characterId || ''
    )

    // 모스트 캐릭터 찾기
    const mostCharacters = findMostCharacters(characters, 3)

    return { mostCharacters }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// 가장 많이 등장한 상위 n개의 캐릭터 찾기 함수
const findMostCharacters = (characters: string[], n: number) => {
  const characterCounts: Record<string, number> = {}

  characters.forEach(character => {
    characterCounts[character] = (characterCounts[character] || 0) + 1
  })

  const sortedCharacters = Object.keys(characterCounts).sort(
    (a, b) => characterCounts[b] - characterCounts[a]
  )

  return sortedCharacters.slice(0, n)
}
