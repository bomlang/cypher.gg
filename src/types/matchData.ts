import { ItemData, PlayerRepresent } from '.'
import { Attribute } from './attribute'
import { PlayInfo } from './playInfo'

export interface MatchData {
  clanName: string
  grade: number
  matches: Matches
  maxRatingPoint: number
  nickname: string
  playerId: string
  ratingPoint: number
  records: Record
  represent: PlayerRepresent
  tierName: string
  tierTest: boolean
}

export interface MatchDetailData {
  date: Date
  gameTypeId: string
  map: Map
  players: Player[]
  teams: Team[]
}

export interface Team {
  players: Player[]
  result: string
}

export interface Player {
  items: ItemData[]
  map: Map
  nickname: string
  playInfo: PlayInfo
  playerId: string
  position: Position
  team: string
  teamResult: string
}

interface Matches {
  date: Date
  gameTypeId: string
  next: string
  rows: Match[]
}

export interface Match {
  date: string
  map: Map
  matchId: string
  playInfo: PlayInfo
  position: Position
}

interface Date {
  start: string
  end: string
}

interface Map {
  mapId: string
  name: string
}

interface Position {
  attribute: Attribute[]
  explain: string
  name: string
}

interface Record {
  gameTypeId: string
  loseCount: number
  stopCount: number
  winCount: number
}
