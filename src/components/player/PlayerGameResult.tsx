import { calcKDA } from '@/utils'
import { Link } from 'react-router-dom'
import { Match, Player, Team } from '@/types'
import { ItemSlot, NotWornItem } from '.'
import { useEffect, useState } from 'react'
import { matchDetailedInfoApi } from '@/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { checkWinOrLose, itemEquipSlotCode, playTimeCalc } from '@/utils'

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
  const [gameParticipants, setGameParticipants] = useState<Player[] | null>(
    null
  )

  useEffect(() => {
    const fetchData = async () => {
      const data = await matchDetailedInfoApi(match.matchId)
      const id = playerId

      if (data) {
        const teamsData = data.teams.map((team: Team) => {
          const playersData = team.players.map(playerId => {
            const player = {
              playerId: playerId
            }
            return player
          })

          return {
            teamResult: team.result,
            players: playersData
          }
        })

        data.players.forEach((player: Player) => {
          const matchingTeam = teamsData.find((team: Team) =>
            team.players.some(
              teamPlayer => teamPlayer.playerId === player.playerId
            )
          )

          if (matchingTeam) {
            player.teamResult = matchingTeam.teamResult
            player.team =
              matchingTeam.teamResult === 'win' ? 'Red Team' : 'Blue Team'
          }
        })
        // console.log(data.players)

        setGameParticipants(data.players)

        const playerMetchData = data.players.filter(
          (player: Player) => player.playerId === id
        )

        // console.log(playerMetchData)

        setMatchDetailData(playerMetchData)
      }
    }

    fetchData()
  }, [])

  // 플레이타임 계산해서 span 태그에 넣기

  return (
    <section className="flex items-center rounded w-[745px]">
      <div
        id="deco"
        className={`${
          result ? 'bg-gameBlue500' : 'bg-gameRed500'
        } w-[6px] h-[164px]`}></div>
      <div
        className={`my-2 flex p-3 gap-5 max-w-[740px] ${
          result ? 'bg-gameBlue100' : 'bg-gameRed100'
        }`}>
        <div className="flex flex-col justify-center">
          <div className="font-bold">{gameType}</div>
          <span className="text-xs">2시간전</span>
          <div>-</div>
          <div
            className={`font-bold ${
              result ? 'text-gameBlue600' : 'text-gameRed600'
            }`}>
            {result ? '승리' : '패배'}
          </div>
          <span className="text-xs">{playTime}</span>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
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
                  key={item.id}
                  src={`https://img-api.neople.co.kr/cy/position-attributes/${item.id}`}
                  alt={item.name}
                  className="w-8 h-8 rounded-full"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 font-bold leading-5 text-[15px]">
                <span className="text-gray900">{match.playInfo.killCount}</span>
                <p className="text-gray400 ">/</p>
                <span className="text-red600">{match.playInfo.deathCount}</span>
                <p className="text-gray400 font-bold">/</p>
                <span className="text-gray900">
                  {match.playInfo.assistCount}
                </span>
              </div>
              <div className="text-xs font-nomal leading-4 text-gray400">
                {kda}
              </div>
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

        {/* <div className="flex max-h-[160px] w-[300px] gap-1"> */}
        <div className="flex flex-col items-start">
          {gameParticipants
            ?.filter(player => player.team === 'Blue Team') // 블루팀 필터링
            .map((player: Player) => (
              <div
                key={player.playerId}
                className="flex items-center gap-1">
                <div>
                  <img
                    src={`https://img-api.neople.co.kr/cy/characters/${player.playInfo.characterId}?zoom=1`}
                    alt={player.playInfo.characterName}
                    className="w-6 h-6 rounded"
                  />
                </div>
                <Link
                  to={`/player/${player.nickname}`}
                  className="flex min-w-[84px]">
                  <span className="text-xs reading-4 text-gray500">
                    {player.nickname}
                  </span>
                </Link>
              </div>
            ))}
        </div>

        <div className="flex flex-col items-start flex-grow">
          {gameParticipants
            ?.filter(player => player.team === 'Red Team') // 레드팀 필터링
            .map((player: Player) => (
              <div
                key={player.playerId}
                className="flex items-center gap-1">
                <div>
                  <img
                    src={`https://img-api.neople.co.kr/cy/characters/${player.playInfo.characterId}?zoom=1`}
                    alt={player.playInfo.characterName}
                    className="w-6 h-6 rounded"
                  />
                </div>
                <Link
                  to={`/player/${player.nickname}`}
                  className="flex min-w-[84px]">
                  <span className="text-xs reading-4 text-gray500">
                    {player.nickname}
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <button
        className={`${
          result ? 'bg-gameBlue200' : 'bg-gameRed200'
        } p-2 w-8 h-[164px]`}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </section>
  )
}
