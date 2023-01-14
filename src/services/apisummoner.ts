import axios from 'axios'

export async function getSummonersName(name: string) {
  try {
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    return data
  } catch (error) {
    return error
  }
}
