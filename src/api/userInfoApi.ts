import axios from 'axios'

export const userInfoApi = async (playerId: string) => {
  try {
    const response = await axios.get(
      `/api/players/${playerId}?apikey=${import.meta.env.VITE_CYPHERS_APIKEY}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    console.log(response)
    return response
  } catch (error) {
    console.error('예상치 못한 에러가 발생하였습니다🥺 :', error)
  }
}
