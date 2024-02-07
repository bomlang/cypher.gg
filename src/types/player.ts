export interface Player {
  grade: number
  nickname: string
  playerId: string
  represent: PlayerRepresent
}

export interface PlayerRepresent {
  characterId: string
  characterName: string
}
