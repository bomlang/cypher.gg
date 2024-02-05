import { userApi } from '@/api'
import { Player } from '@/types'
import { useEffect, useState } from 'react'

export const SearchBar = () => {
  const [btnChange, setBtnChange] = useState(false)
  const [favUserCheck, setFavUserCheck] = useState(false)
  const [basicUserData, setBasicUserData] = useState<Player | null>(null)

  const handleUserSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value) {
      const retrievedUserData = await userApi(value)
      setBasicUserData(retrievedUserData)
    }
  }

  useEffect(() => {
    // const data = async () => {
    //   await charApi()
    // }
    // data()
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
        />

        <nav className="w-[660px] h-[328px] fixed top-[120px] shadow-lg hidden">
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
            <li></li>
            <li className="py-2 px-3 flex items-center hover:bg-gray100">
              <a href="">
                <span>
                  {/* {최근 검색한 사용자의 닉네임이 들어갑니다 */}
                  전라인다가는사람
                </span>
              </a>

              <div className="flex items-center">
                <label
                  htmlFor="favUserCheckbox"
                  className={`${
                    favUserCheck ? 'bg-yellowStar' : 'bg-whiteStar'
                  } w-6 h-6 inline-block cursor-pointer`}
                  onClick={() => setFavUserCheck(prev => !prev)}></label>
                <input
                  type="checkbox"
                  id="favUserCheckbox"
                  className="hidden"
                />
              </div>
              <button
                type="button"
                className="w-6 h-6">
                <img
                  src="/xButton.svg"
                  alt=""
                />
              </button>
            </li>
          </ul>

          <a href="">
            <div className="px-4 py-2 absolute">
              <div></div>
              <div className="gap-2 text-sm">
                <span>{basicUserData?.nickname}</span>
              </div>
              <small className="color-gray500">{basicUserData?.grade}</small>
            </div>
          </a>
        </nav>
      </div>
    </form>
  )
}
