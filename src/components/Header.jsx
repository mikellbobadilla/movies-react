import { useCallback } from 'react'
import { useSearch } from '../hooks/useSearch'
import debounce from 'just-debounce-it'
import { useMovies } from '../hooks/useMovies'
import { Search } from './Search'

export function Header() {
  const { search, updateSearch, error: errorSearch } = useSearch()
  const { loading, getMovies } = useMovies()

  /* Debounce to get Movies when the client is typing */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(debounce((search) => {
    getMovies({ search })
  }, 300),
    []
  )

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    if (!errorSearch) debounceGetMovies(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  return (
    <header className='container mx-auto p-3 w-full'>
      <h1 className='text-3xl lg:text-5xl text-center mb-10 text-red-300/80 font-semibold'>Movie search</h1>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        error={errorSearch}
      />
    </header>
  )
}
