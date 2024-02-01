import { useSearch } from '../hooks/useSearch'
import { useMovies } from '../hooks/useMovies'
import { Search } from './Search'
import { useEffect } from 'react'

export function Header() {
  const { search, updateSearch, error: errorSearch } = useSearch()
  const { loading, getMovies } = useMovies()

  useEffect(() => {

    const debounceMovies = setTimeout(() => {
      getMovies({ search })
    }, 400)

    return () => clearTimeout(debounceMovies)

  }, [search, getMovies])

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  return (
    <header className='container mx-auto p-3 w-full mb-5'>
      <h1 className='text-3xl text-cruise-200 text-center mb-10  font-bold'>Movie search</h1>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        error={errorSearch}
      />
    </header>
  )
}
