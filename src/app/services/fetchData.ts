import { SearchResultProps } from '../types/types'

const fetchData = async (query: string): Promise<SearchResultProps> => {
  const res = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`
  )
  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`)
  }
  const data: SearchResultProps = await res.json()
  return data
}

export default fetchData
