import { Line } from 'react-chartjs-2'

const WinRateChart = ({ data }) => {
  // 데이터 형식을 Chart.js에 맞게 변환
  const chartData = {
    labels: data.map(game => game.gameNumber),
    datasets: [
      {
        label: 'Win Rate',
        data: data.map(game => game.winRate),
        borderColor: '#8884d8',
        fill: false
      }
    ]
  }

  // 그래프 옵션 설정
  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        min: 0,
        max: 100
      }
    }
  }

  return (
    <Line
      data={chartData}
      options={options}
    />
  )
}

export default WinRateChart
