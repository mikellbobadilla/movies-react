import { useRef, useState, useCallback } from 'react'
import { MovieService } from '../service/movie_service'
import { useContext } from 'react'
import { MoviesContext } from '../context/context_movies'

export function useMovies () {
  const { movies, setMovies, setLoading, loading } = useContext(MoviesContext)
  const [error, setError] = useState(null)
  const prevSearch = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    if (search === prevSearch.current) return

    try {
      setLoading(true)
      setError(null)
      prevSearch.current = search
      const newMovies = await MovieService.getBy({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [setMovies, setLoading])

  return { movies, getMovies, error, loading }
}
