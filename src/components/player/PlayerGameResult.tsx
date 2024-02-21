import { matchDetailedInfoApi } from '@/api'
import { Match, Player } from '@/types'
import { checkWinOrLose, itemEquipSlotCode, playTimeCalc } from '@/utils'
import { calcKDA } from '@/utils'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemSlot, NotWornItem } from '.'

interface PlayerGameResultType {
  match: Match
  gameType: string
  playerId: string
}

export const PlayerGameResult = ({
  match,
  gameType,
  playerId
}: PlayerGameResultType) => {
  const playTime = playTimeCalc(match.playInfo.playTime)
  const result = checkWinOrLose(match.playInfo.result)
  const kda = calcKDA(
    match.playInfo.killCount,
    match.playInfo.deathCount,
    match.playInfo.assistCount
  )

  const [matchDetailData, setMatchDetailData] = useState<Player[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await matchDetailedInfoApi(match.matchId)
      const id = playerId

      if (data) {
        const playerMetchData = data.players.filter(
          (player: Player) => player.playerId === id
        )

        console.log(playerMetchData)
        setMatchDetailData(playerMetchData)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="bg-yellow-300 mt-2 flex p-3">
      <div className="font-bold text-sm">
        <div>{gameType}</div>
        <span>2시간전</span>
        <div>-</div>
        <div>{result}</div>
        <span>{playTime}</span>
      </div>

      <div>
        <div className="flex">
          <div className="w-[48px] h-[48px]">
            <Link
              to="/"
              className="relative w-[48px] h-[48px]">
              <img
                src={`https://img-api.neople.co.kr/cy/characters/${match.playInfo.characterId}?zoom=1`}
                alt={match.playInfo.characterName}
                className="rounded-full w-[48px] h-[48px]"
              />
              <span className="rounded-full bg-black w-5 h-5 text-white text-sm p-1 absolute bottom-0 right-0 flex justify-center items-center font-xs">
                {match.playInfo.level}
              </span>
            </Link>
          </div>
          <div className="flex">
            {match?.position?.attribute?.map(item => (
              <img
                // key={item.id}
                src={`https://img-api.neople.co.kr/cy/position-attributes/${item.id}`}
                alt={item.name}
                className="w-8 h-8 rounded-full"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <span>{match.playInfo.killCount}</span>
              <p>/</p>
              <span>{match.playInfo.deathCount}</span>
              <p>/</p>
              <span>{match.playInfo.assistCount}</span>
            </div>
            <div>{kda}</div>
          </div>
        </div>

        <div id="gamePlayItem">
          <dl className="flex flex-wrap gap-1 w-[348px]">
            {matchDetailData &&
              itemEquipSlotCode.map(slotCode => {
                const matchingItem = matchDetailData[0]?.items.find(
                  item => item.equipSlotCode === slotCode
                )

                return matchingItem ? (
                  <ItemSlot
                    key={matchingItem.itemId}
                    item={matchingItem}
                  />
                ) : (
                  <NotWornItem key={slotCode} />
                )
              })}
          </dl>
        </div>
      </div>
    </section>
  )
}
