import { matchHistory } from '.'
import { Match } from '@/types'

export const mostChar = async (playerId: string) => {
  try {
    const response = await matchHistory(playerId)

    // 가정: response가 배열이고, 각 요소가 matches 속성을 가지고 있고, 그 안에 rows 속성과 playInfo 속성이 있다고 가정합니다.
    const matches = response.matches.rows

    const characters = matches.map(
      (item: Match) => item.playInfo?.characterName || ''
    )

    // 모스트 캐릭터 찾기
    const mostCharacters = findMostCharacters(characters, 3)

    console.log('Most Characters:', mostCharacters)
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
