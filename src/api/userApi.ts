import axios from 'axios'

export const userApi = async <T>(nickname: string): Promise<T> => {
  const encodingNickname = encodeURIComponent(nickname)

  try {
    const response = await axios.get(
      `/api/players?nickname=${encodingNickname}&apikey=${
        import.meta.env.VITE_CYPHERS_APIKEY
      }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    // console.log(response.data.rows[0])
    return response.data.rows[0] as T
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
