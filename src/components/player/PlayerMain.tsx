import { usePlayerPrevGameStore } from '@/zustand'
import { useState } from 'react'
import { PlayerGameResult } from './PlayerGameResult'
// import WinRateChart from './WinRateChart'

export const PlayerMain = () => {
  const { gameHistory: game } = usePlayerPrevGameStore()

  const [visibleItems, setVisibleItems] = useState(20)
  const [selectBtn, setSelectBtn] = useState('전체')

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 20)
  }

  const handleBtnClick = (button: string) => {
    setSelectBtn(button)
  }

  return (
    <section className="ml-2 w-[745px]">
      <article className="flex flex-col rounded">
        <div className="border-b-2 border-gray200 bg-white py-2 px-3  rounded">
          <ul className="flex gap-1">
            <li>
              <button
                onClick={() => {
                  handleBtnClick('전체')
                }}
                className={`${
                  selectBtn === '전체' ? 'bg-primary text-white' : 'bg-white'
                } py-1 px-3 h-8 font-bold  rounded`}>
                전체
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleBtnClick('공식전')
                }}
                className={`${
                  selectBtn === '공식전' ? 'bg-primary text-white' : 'bg-white'
                } py-1 px-3 h-8 font-bold  rounded`}>
                공식전
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleBtnClick('일반전')
                }}
                className={`${
                  selectBtn === '일반전' ? 'bg-primary text-white' : 'bg-white'
                } bg-primary py-1 px-3 h-8 font-bold rounded`}>
                일반전
              </button>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded py-2 px-3 ">
          <div>
            <span className="text-sm leading-4 text-gray500">
              20전 {10}승 {10}패
            </span>
            <div>
              {/* <WinRateChart data={winRateData} /> */}
              <div id="kda">
                <span>{1.2}</span>/<span>{1.2}</span>/<span>{1.2}</span>
              </div>
            </div>
          </div>
          <div>
            <span>평균 KDA</span>
            <strong>4.32</strong>
          </div>
          <div>
            <span>플레이한 캐릭터 (최근 20게임)</span>
            <ul>
              <li>
                <img
                  src=""
                  alt=""
                />
                <div>
                  <span>40%</span>
                  <span>(4승 6패)</span>
                  <span>3.44 평점</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {game?.matches?.rows?.slice(0, visibleItems).map(item => (
        // <div key={item.date}>{item.date}</div>
        <PlayerGameResult
          key={item.date}
          match={item}
          gameType={game.matches.gameTypeId}
          playerId={game.playerId}
        />
      ))}

      {game?.matches?.rows?.length > visibleItems && (
        <button onClick={handleShowMore}>더 보기</button>
      )}
    </section>
  )
}
