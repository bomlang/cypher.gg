import { userApi } from '@/api'
import { useEffect, useState } from 'react'
import { PlayerBasic } from '@/types'
import { Link, useNavigate } from 'react-router-dom'
import {
  getSearchHistory,
  removeToLocalStorageSearchItem,
  saveToLocalStorage
} from '@/utils'

export const SearchBar = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [btnChange, setBtnChange] = useState(false)
  const [recentSearchHistory, setRecentSearchHistory] = useState<string[]>()
  const [favUserCheck, setFavUserChecks] = useState<{ [key: string]: boolean }>(
    {}
  )
  const [isNavigationVisible, setNavigationVisible] = useState(false)
  const [basicUserData, setBasicUserData] = useState<PlayerBasic | null>(null)

  const handleUserSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value) {
      setNavigationVisible(true)
      const retrievedUserData = await userApi<PlayerBasic>(value)
      setBasicUserData(retrievedUserData)
    } else {
      setNavigationVisible(false)
    }
  }

  const handleCheckboxClick = (item: string) => {
    setFavUserChecks(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const handleRecentSearchDelete = (item: string) => {
    removeToLocalStorageSearchItem(item)

    setRecentSearchHistory(prev =>
      prev?.filter(historyItem => historyItem !== item)
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 엔터 키를 누르고, 입력값이 비어 있지 않으면 페이지 이동합니다.
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/player/${searchTerm}`)
      saveToLocalStorage(searchTerm)
    }
  }

  useEffect(() => {
    const searchHistory: string[] = getSearchHistory()
    setRecentSearchHistory(searchHistory)
  }, [])

  return (
    <form className="rounded-[30px] bg-white w-[800px] h-16 border-2 px-10 flex items-center justify-center ">
      <div className="flex flex-col justify-center w-[730px] relative">
        <label
          htmlFor="nicknameSearch"
          className="text-[12px] font-bold mb-1 cursor-pointer">
          검색
        </label>
        <input
          type="text"
          id="nicknameSearch"
          autoComplete="off"
          placeholder="플레이어 이름"
          className="focus:outline-none "
          onChange={handleUserSearch}
          onKeyDown={handleKeyPress}
        />

        <nav
          className={`w-[660px] h-[328px] absolute top-[56px] right-[35px] shadow-lg bg-white ${
            isNavigationVisible ? 'block' : 'hidden'
          }`}>
          <div className="">
            <button
              type="button"
              className={`w-[50%] h-[34px] text-gray400 ${
                btnChange ? 'bg-gray200' : 'bg-white'
              }`}
              onClick={() => setBtnChange(prev => !prev)}>
              최근검색
            </button>
            <button
              type="button"
              className={`w-[50%] h-[34px] text-gray400 ${
                btnChange ? 'bg-white' : 'bg-gray200'
              }`}
              onClick={() => setBtnChange(prev => !prev)}>
              즐겨찾기
            </button>
          </div>
          {/* <div className="px-3 py-2 color-gray900 text-sm font-bold leading-5 border-b border-gray200 color-gray900">
            능력자 프로필
          </div> */}

          {/* 최근검색 능력자 리스트 */}
          <ul className="my-1">
            {recentSearchHistory?.map((item: string, index: number) => (
              <li
                className="py-2 px-3 flex items-center hover:bg-gray100"
                key={index}>
                <Link to={`/player/${item}`}>
                  <span>{item}</span>
                </Link>

                <div className="flex items-center">
                  <label
                    htmlFor="favUserCheckbox"
                    className={`${
                      favUserCheck[item] ? 'bg-yellowStar' : 'bg-whiteStar'
                    } w-6 h-6 inline-block cursor-pointer`}
                    onClick={() => handleCheckboxClick(item)}></label>
                  <input
                    type="checkbox"
                    id="favUserCheckbox"
                    className="hidden"
                  />
                </div>
                <button
                  type="button"
                  className="w-6 h-6"
                  onClick={() => handleRecentSearchDelete(item)}>
                  <img
                    src="/xButton.svg"
                    alt="플레이어 최근검색 제거"
                  />
                </button>
              </li>
            ))}
          </ul>

          {basicUserData && (
            <>
              <div className="border border-gray300 border-y py-2 px-3 text-gray900 font-bold leading-5">
                플레이어 프로필
              </div>
              <Link
                to={`/player/${basicUserData?.nickname}`}
                onClick={() => {
                  saveToLocalStorage(basicUserData?.nickname)
                }}>
                <div className="px-4 py-2 flex items-center gap-2">
                  <img
                    src={`https://img-api.neople.co.kr/cy/characters/${basicUserData?.represent.characterId}?zoom=1`}
                    alt="플레이어의 대표캐릭터"
                    className="rounded-full w-[36px] h-[36px]"
                  />
                  <div className="flex flex-col">
                    <span className="">{basicUserData?.nickname}</span>
                    <small className="color-gray500">
                      {basicUserData?.grade} 급
                    </small>
                  </div>
                </div>
              </Link>
            </>
          )}
        </nav>
      </div>
    </form>
  )
}
