import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface RankSearchBarProps {
  width: number
  placeholder: string
}

export const RankSearchBar = ({ width, placeholder }: RankSearchBarProps) => {
  return (
    <div
      className={`bg-gray200 w-[${width}px] h-10 flex justify-center items-center rounded`}>
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
          placeholder={placeholder}
          id="rankSearch"
          className="focus:outline-none bg-gray200 mx-3 text-sm h-[40px] font-bold"
          autoComplete="off"
        />
      </form>
    </div>
  )
}
