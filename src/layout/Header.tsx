import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav className="w-screen bg-background2 font-bold text-white flex items-center px-[60px] py-3 border border-b-2 border-burgundy">
        <div className="mr-6">
          <h1>CYPHER.GG</h1>
        </div>

        <ul className="flex gap-6 leading-4">
          <li>
            <Link to="/">
              <button className="hover:text-navTextHover">홈</button>
            </Link>
          </li>
          <li>
            <Link to="/Rank">
              <button className="hover:text-navTextHover">통계</button>
            </Link>
          </li>
          <li>
            <Link to="/CharStat">
              <button className="hover:text-navTextHover">랭킹</button>
            </Link>
          </li>
          <li>
            <button className="hover:text-navTextHover">캐릭터정보</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
