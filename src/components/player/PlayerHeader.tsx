import { usePlayerPrevGameStore } from '@/zustand'

export const PlayerHeader = () => {
  const { gameHistory: game } = usePlayerPrevGameStore()

  return (
    <header className="bg-white mb-2">
      <section className="flex h-[150px] items-center px-1">
        <div className="relative w-24 h-24">
          <img
            src={`https://img-api.neople.co.kr/cy/characters/${game?.represent.characterId}?zoom=2`}
            alt={game?.represent.characterName}
            className="rounded-xl"
          />
          <div className="absolute bottom-6 right-12">
            <span className="text-white bg-gray900 px-2 text-xs leading-5 rounded-lg">
              {game?.grade}
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <h1>
              <strong className="text-2xl text-gray900">
                {game?.nickname}
              </strong>
            </h1>
            <div>
              <button>heart</button>
            </div>
          </div>

          <button className="bg-background2 text-white text-sm w-20 h-10 px-3 rounded">
            전적 갱신
          </button>
        </div>
      </section>

      <div className="w-screen h-[45px] border-t border-gray200 py-1">
        <h2 className="hidden">종합</h2>
        <ul className="flex gap-1 px-1">
          <li>
            <button className="min-w-[90px] h-8 rounded bg-background2 text-white">
              전체
            </button>
          </li>
          <li>
            <button className="min-w-[90px] h-8 rounded bg-background2 text-white">
              캐릭터
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
