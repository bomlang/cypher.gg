import { Character } from '@/types'
import axios from 'axios'

export const charApi = async () => {
  try {
    const response = await axios.get(
      `/api/characters?apikey=${import.meta.env.VITE_CYPHERS_APIKEY}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data.rows as Character[]
  } catch (error) {
    console.error('예상치 못한 에러가 발생하였습니다🥺 :', error)
  }
}
