import { Header, Footer } from '@/layout'
import { SearchBar, DownloadBtn } from '@/components'
// import { useEffect } from 'react'
// import { rankData } from '@/utils'

// import { searchUserInfo } from './api'

function Home() {
  // useEffect(() => {
  //   rankData()
  // }, [])
  return (
    <>
      <Header />
      <main className="w-screen h-screen flex items-center justify-center bg-background2">
        <div className="flex justify-center flex-col items-center ">
          <SearchBar />
          <DownloadBtn />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
