import axios from 'axios'

const currentDate = new Date()
// 90일 전의 날짜를 계산
const startDate = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000)

const isoStartDate = startDate.toISOString()
const isoEndDate = currentDate.toISOString()

export const matchHistory = async (playerId: string) => {
  try {
    const response = await axios.get(
      `/api/players/${playerId}/matches?gameTypeId=rating&startDate=${isoStartDate}&endDate=${isoEndDate}&limit=100&apikey=${
        import.meta.env.VITE_CYPHERS_APIKEY
      }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
