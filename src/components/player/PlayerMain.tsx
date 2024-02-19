import { usePlayerPrevGameStore } from '@/zustand'
import { useState } from 'react'
import { PlayerGameResult } from './PlayerGameResult'

export const PlayerMain = () => {
  const { gameHistory: game } = usePlayerPrevGameStore()
  const [visibleItems, setVisibleItems] = useState(20)
  // console.log(game)

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 20)
  }

  return (
    <main>
      <article>
        <div>
          <ul>
            <li>
              <button>전체</button>
            </li>
            <li>
              <button>공식</button>
            </li>
            <li>
              <button>일반</button>
            </li>
          </ul>
        </div>

        <div>
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
        />
      ))}

      {game?.matches?.rows?.length > visibleItems && (
        <button onClick={handleShowMore}>더 보기</button>
      )}
    </main>
  )
}
