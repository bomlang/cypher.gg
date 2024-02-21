export interface PlayInfo {
  assistCount: number
  attackPoint: number
  backAttackCount: number
  battlePoint: number
  characterId: string
  characterName: string
  comboCount: number
  damagePoint: number
  deathCount: number
  demolisherKillCount: number
  getCoin: number
  guardTowerKillCount: number
  guardianKillCount: number
  healAmount: number
  killCount: number
  level: number
  maxLifeTime: number
  minLifeTime: number
  partyInfo: PartyInfo
  partyId?: string
  partyUserCount: number
  playTime: number
  playTypeName: string
  random: boolean
  responseTime: number
  result: string
  sentinelKillCount: number
  sightPoint: number
  spellCount: number
  spendCoin: number
  spendConsumablesCoin: number
  towerAttackPoint: number
  trooperKillCount: number
}

interface PartyInfo {
  name: string
}
