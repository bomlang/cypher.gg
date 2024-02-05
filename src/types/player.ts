export interface Player {
  grade: number
  nickname: string
  playerId: string
  represent: PlayerRepresent
}

interface PlayerRepresent {
  characterId: string
  characterName: string
}
