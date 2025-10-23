'use client'

import { FormEvent, useState } from 'react'
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import fetchData from './services/fetchData'
import { MovieProps } from './types/types'

export default function Home() {
  const [query, setQuery] = useState<string>('')
  const [movies, setMovies] = useState<MovieProps[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = await fetchData(query)
      if (!data.Search) {
        throw new Error('sorry an error occurred')
      }

      setMovies(data.Search)
    } catch (error) {
      throw new Error(error + 'sorry an error occurred')
    }
  }
  const handleChange = (query: string) => {
    setQuery(query)
  }
  return (
    <div>
      <main className="flex">
        <SearchBar
          handleSubmit={handleSubmit}
          placeholder={'Search movies'}
          query={query}
          onChange={handleChange}
        />
        {movies ? <Cards Search={movies} /> : null}
      </main>
    </div>
  )
}
