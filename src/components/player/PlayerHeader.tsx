import { usePlayerPrevGameStore } from '@/zustand'

export const PlayerHeader = () => {
  const { gameHistory: game } = usePlayerPrevGameStore()

  return (
    <header>
      <section>
        <div>
          <img
            src={`https://img-api.neople.co.kr/cy/characters/${game?.represent.characterId}?zoom=2`}
            alt={game?.represent.characterName}
            className="rounded-xl"
          />
          <div>
            <span>{game?.grade}</span>
          </div>
        </div>

        <div>
          <h1>
            <strong>{game?.nickname}</strong>
          </h1>
          <button>전적 갱신</button>
        </div>
      </section>

      <div className="flex">
        <button>전체</button>
        <button>캐릭터</button>
      </div>
    </header>
  )
}
