import { charApi } from '@/api'
import { useEffect } from 'react'
import { CharSearchBar, CharNav } from '@/components'

function CharStat() {
  useEffect(() => {
    const fetchData = async () => {
      await charApi()
    }

    fetchData()
  }, [])

  return (
    <div>
      <CharSearchBar />
      <CharNav />
    </div>
  )
}

export default CharStat
