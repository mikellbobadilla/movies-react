import { useState } from 'react'
import { useEffect } from 'react'
import { MovieService } from '../service/movie_service'

export function useMovie({ movieId }) {
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getMovie() {
            try {
                setLoading(true)
                setError(null)
                const newMovie = await MovieService.get({ movieId })
                setMovie(newMovie)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getMovie()
    }, [movieId])

    return { movie, loading, error }
}