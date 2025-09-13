'use client'

import { FormEvent, useState } from 'react'
import SearchBar from './components/searchbar/SearchBar'
import fetchData from './services/fetchData'
import { MovieProps } from './types/types'

export default function Home() {
  const [query, setQuery] = useState<string>('')
  const [, setMovies] = useState<MovieProps[] | null>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const data = await fetchData(query)
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
        <p>hello home page</p>
        <SearchBar
          handleSubmit={handleSubmit}
          placeholder={'Search movies'}
          query={query}
          onChange={handleChange}
        />
      </main>
    </div>
  )
}
