import { SearchResultProps } from '../types/types'

const fetchData = async (query: string): Promise<SearchResultProps> => {
  const res = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
  )
  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`)
  }
  const data: SearchResultProps = await res.json()
  console.log('data in fetch', data)

  return data
}

export default fetchData
