import { charApi } from '@/api'
import { useEffect } from 'react'
import { CharSearchBar, CharTitle } from '@/components'

function CharStat() {
  useEffect(() => {
    const fetchData = async () => {
      await charApi()
      // await userApi('학뀨뀨잉')
    }

    fetchData()
  }, [])

  return (
    <div>
      <CharSearchBar />
      <CharTitle />
    </div>
  )
}

export default CharStat
