import { charApi } from '@/api'
import { Character } from '@/types'
import { useEffect, useState } from 'react'
import { RankSearchBar } from '..'
import { Link } from 'react-router-dom'

export const CharList = () => {
  const [chars, setChars] = useState<undefined | Character[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const charData = await charApi()
      setChars(charData)
    }

    fetchData()
  }, [])

  return (
    <aside className="flex flex-col items-center w-[323px] justify-center gap-2 rounded border-gray-300 border py-4 bg-white">
      <RankSearchBar
        width={292}
        placeholder={'캐릭터 검색'}
      />

      <section>
        <div className="w-[292px] border border-gray250 rounded pb-2">
          <button className="h-[40px] w-[50px] border-gray250 p-2">All</button>
          <button className="h-[40px] w-[50px] border-gray250 p-2">탱커</button>
          <button className="h-[40px] w-[50px] border-gray250 p-2">근딜</button>
          <button className="h-[40px] w-[50px] border-gray250 p-2">원딜</button>
          <button className="h-[40px] w-[50px] border-gray250 p-2">서폿</button>
        </div>

        <ul className="flex flex-wrap gap-2.5 w-[292px] my-2 border-t border-gray200 py-2">
          {chars?.map(item => (
            <li>
              <Link
                to="/"
                className="">
                <div
                  key={item.characterId}
                  className="w-[50px] h-[62px] flex flex-col">
                  <img
                    src={`https://img-api.neople.co.kr/cy/characters/${item.characterId}?zoom=1`}
                    alt={item.characterName}
                    className="w-[50px] h-[50px] rounded"
                  />
                  <small>{item.characterName}</small>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default CharList
