import { rankApi, userInfoApi } from '@/api'
import { Rank } from '@/types'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { mostChar } from '@/api/mostChar'

export const RankGraph = () => {
  const [rankData, setRankData] = useState<null | Rank[]>(null)
  // const [mostChars, setMostChars] = useState<undefined | MostChar[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await rankApi()
        const playerIds = data.map((item: Rank) => item.playerId)
        //  tier가 안나오는 문제 해결해야함.

        const matchHistoryResults = await Promise.all(
          playerIds.map(async (playerId: string) => mostChar(playerId))
        )

        const mergedData = data.map((player: Rank, index: number) => ({
          ...player,
          mostChars: matchHistoryResults[index]?.mostCharacters || []
        }))

        console.log(mergedData)

        setRankData(mergedData)
      } catch (error) {
        console.error('Error fetching rank data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="rounded overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="h-[32px] bg-gray100">
            <th className="w-[40px]">#</th>
            <th className="w-[518px]">능력자</th>
            <th className="w-[110px]">티어</th>
            <th className="w-[60px]">RP</th>
            <th className="w-[130px]">모스트 캐릭터</th>
            <th className="w-[50px]">급수</th>
            <th className="w-[172px]">승률</th>
          </tr>
        </thead>

        <tbody>
          {rankData?.map((player: Rank) => (
            <tr key={player.playerId}>
              <td className="w-[40px] text-center py-6">{player.rank}</td>
              <td className="w-[518px]">
                <Link to="/">
                  <div className="flex gap-3 items-center">
                    <img
                      src={`https://img-api.neople.co.kr/cy/characters/${player.represent.characterId}?zoom=<zoom>`}
                      alt={player.represent.characterName}
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <span className="py-6">{player.nickname}</span>
                  </div>
                </Link>
              </td>
              <td className="w-[110px] text-center py-6">
                {player.ratingPoint}
              </td>
              <td className="w-[60px] text-center py-6">
                {player.ratingPoint}
              </td>

              <td className="w-[130px] py-6 flex gap-2">
                {player.mostChars.map((mostChar, index) => (
                  <Link
                    to="/"
                    key={index}>
                    <img
                      src={`https://img-api.neople.co.kr/cy/characters/${mostChar}?zoom=<zoom>`}
                      alt=""
                      className="rounded-full"
                    />
                  </Link>
                ))}
              </td>

              <td className="w-[50px] text-center py-6">{player.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
