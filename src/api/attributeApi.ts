import axios from 'axios'

export const attributeApi = async () => {
  try {
    const response = await axios.get(
      `/api/position-attributes/<attributeId>?apikey=${
        import.meta.env.VITE_CYPHERS_APIKEY
      }`
    )

    console.log(response)

    return response
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
