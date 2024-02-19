import { Link } from 'react-router-dom'

export const CharTierList = () => {
  return (
    <main>
      <div>
        <table>
          <caption>캐릭터 랭킹 분석</caption>
          <colgroup>
            <col width={'48px'} />
            <col width={'*'} />
            <col width={'56px'} />
            <col width={'56px'} />
            <col width={'94px'} />
            <col width={'110px'} />
            <col width={'94px'} />
            <col width={'135px'} />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">순위</th>
              <th scope="col">캐릭터</th>
              <th scope="col">티어</th>
              <th scope="col">포지션</th>
              <th scope="col">승률</th>
              <th scope="col">픽률</th>
              <th scope="col">밴률</th>
              <th scope="col">상대하기 어려운 캐릭터</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>
                <Link to="/">
                  <img
                    src=""
                    alt=""
                  />
                  <strong>로라스</strong>
                </Link>
              </td>
              <td>
                <span>1T</span>
              </td>
              <td>
                {/* <img src="" alt="" /> */}
                <span>근딜</span>
              </td>
              <td>
                <span>60%</span>
              </td>
              <td>
                <span>20%</span>
              </td>
              <td>
                <span>15%</span>
              </td>
              <td>
                <Link to="/">
                  <div>
                    <img
                      src=""
                      alt=""
                    />
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
