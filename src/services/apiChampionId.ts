import axios from 'axios'

export async function getChampionById(id: number) {
  try {
    const { data } = await axios.get(`/api/champions/${id}`)
    return data
  } catch (error) {
    return error
  }
}
