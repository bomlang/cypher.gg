import axios from 'axios'

export const rankApi = async () => {
  try {
    const response = await axios.get(
      `/api/ranking/ratingpoint?&offset=0&limit=10&apikey=${
        import.meta.env.VITE_CYPHERS_APIKEY
      }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return response.data.rows
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
