import { useCallback, useId } from 'react'
import { useSearch } from '../hooks/useSearch'
import debounce from 'just-debounce-it'

import { Spinner } from './Spinner'
import { useMovies } from '../hooks/useMovies'

export function Header() {
  const searchIdInput = useId()
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

      <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
        <label htmlFor={searchIdInput} className="mb-2 text-sm font-medium text-white sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-red-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            onChange={handleChange}
            value={search}
            type="search"
            id={searchIdInput}
            name='search'
            className="block w-full py-3 px-4 ps-10 text-base text-red-200/70 rounded-md bg-gray-800/90 outline-none border border-transparent hover:border-red-300/80 focus:border-red-500/80 transition"
            placeholder="Avengers, The Matrix, ..."
            autoComplete='off'
          />

          <button
            type="submit"
            className="text-white absolute  end-2.5 bottom-[7px] w-[75px] bg-brick-red-700 hover:bg-red-300/80 hover:text-red-800/90 transition font-medium rounded-md text-sm px-4 py-2"
            disabled={errorSearch}
          >
            {
              loading
                ? <Spinner />
                : 'Search'
            }
          </button>
        </div>
        {errorSearch && <p className='text-red-500/80 text-sm text-center mt-3'>{errorSearch}</p>}
      </form>

    </header>
  )
}
