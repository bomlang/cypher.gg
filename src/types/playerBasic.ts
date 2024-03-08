export interface PlayerBasic {
  grade: number
  nickname: string
  playerId: string
  represent: PlayerRepresent
}

export interface PlayerRepresent {
  characterId: string
  characterName: string
}
