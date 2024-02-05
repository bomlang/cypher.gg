import { rankApi } from '@/api'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const RankGraph = () => {
  useEffect(() => {
    const data = () => {
      rankApi()
    }

    data()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>능력자</th>
            <th>티어</th>
            <th>RP</th>
            <th>모스트 캐릭터</th>
            <th>급수</th>
            <th>승률</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{/* 순위 */}</td>
            <td>
              <Link to="/">
                <img
                  src=""
                  alt=""
                />
                <span>{/* 닉네임 */}</span>
              </Link>
            </td>
            <td>{/* 티어 */}</td>
            <td>{/* RankPoint */}</td>
            <td>
              <Link to="/">
                <img
                  src=""
                  alt=""
                />
              </Link>
              <Link to="/"></Link>
              <Link to="/"></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
