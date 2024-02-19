import { Match } from '@/types'
import { checkWinOrLose, playTimeCalc } from '@/utils'

interface PlayerGameResultType {
  match: Match
  gameType: string
}

export const PlayerGameResult = ({ match, gameType }: PlayerGameResultType) => {
  const playTime = playTimeCalc(match.playInfo.playTime)
  const result = checkWinOrLose(match.playInfo.result)

  return (
    <>
      <div>
        <div>{gameType}</div>
        <span>2시간전</span>
        <div>-</div>
        <div>{result}</div>
        <span>{playTime}</span>
      </div>
    </>
  )
}
