import axios from 'axios'

export async function getTopChampion(id: string) {
  try {
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}/top?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    return data
  } catch (error) {
    return error
  }
}
