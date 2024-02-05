import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const RankSearchBar = () => {
  return (
    <div className="bg-gray200 w-[240px] h-10 flex justify-center items-center rounded">
      <form>
        <label
          htmlFor="rankSearch"
          className="h-[40px]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray400 text-lg"
          />
        </label>
        <input
          type="text"
          placeholder="능력자의 닉네임 검색"
          id="rankSearch"
          className="focus:outline-none bg-gray200 mx-3 text-sm h-[40px] font-bold"
          autoComplete="off"
        />
      </form>
    </div>
  )
}
