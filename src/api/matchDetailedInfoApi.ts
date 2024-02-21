import axios from 'axios'

export const matchDetailedInfoApi = async (matchId: string) => {
  try {
    const response = await axios.get(
      `/api/matches/${matchId}?&apikey=${import.meta.env.VITE_CYPHERS_APIKEY}`
    )

    // console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
