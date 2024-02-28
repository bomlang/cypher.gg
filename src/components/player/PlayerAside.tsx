import { countPartyMembers } from '@/utils'
import { usePlayerPrevGameStore } from '@/zustand'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const PlayerAside = () => {
  const { gameHistory: game } = usePlayerPrevGameStore()

  useEffect(() => {
    const fetchData = () => {
      // 같이 파티한 유저 (최근 100게임동안)
      const data = countPartyMembers(game)
      // console.log(data)
      console.log(game)
    }

    fetchData()
  }, [])

  return (
    <section className="flex flex-col w-[332px]">
      <div className="rounded bg-white mb-2">
        <span>공식전</span>
        <div className="flex">
          <img
            src=""
            alt=""
          />
          <div className="flex flex-col">
            <span>Unranked</span>
            <span>22rp</span>
          </div>
          <div className="flex flex-col">
            <span>
              {22}승 {33}패
            </span>
            <span>승률 {55}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white mb-2 rounded">
        <div>시즌</div>
      </div>

      <div className="bg-white mb-2 rounded">
        <div className="px-3 py-2 boorder-b border-gray200 leading-5">
          같은 팀으로 게임한 능력자들
        </div>
        <table className="w-[332px]">
          <caption className="hidden">같은 팀으로 게임한 능력자들</caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="bg-gray100">
            <tr className="text-gray400 text-xs">
              <th className="pl-3 text-left py-2">능력자</th>
              <th className="w-[60px] py-2">게임</th>
              <th className="w-[60px] py-2">승 - 패</th>
              <th className="w-[60px] py-2 pr-3">승률</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-xs">
              <td className="py-1">
                <Link
                  to="/"
                  className="flex gap-2 items-center pl-3">
                  {/* <img
                    src=""
                    alt=""
                  /> */}
                  <div className="w-6 h-6 rounded-full bg-black py-1"></div>
                  <span className="text-sm">큐평평니가슴평평</span>
                </Link>
              </td>
              <td className="text-gray500 py-1">22</td>
              <td className="text-gray500 py-1">
                {2} - {3}
              </td>
              <td className="text-gray500 pr-3">{100}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
