import { RankGraph, RankHeader, RankSearchBar } from '@/components'

function Rank() {
  return (
    <nav>
      <RankHeader />
      <RankSearchBar
        width={240}
        placeholder={'능력자의 닉네임을 검색하세요'}
      />
      <RankGraph />
    </nav>
  )
}

export default Rank
