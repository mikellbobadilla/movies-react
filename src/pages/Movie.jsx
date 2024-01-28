import { useParams } from 'react-router-dom'
import { MovieDetail } from '../components/MovieDetail'
import { Spinner } from '../components/Spinner'
import { useMovie } from '../hooks/useMovie'

export function Movie() {
    const { movieId } = useParams()
    const { movie, loading, error } = useMovie({ movieId })

    return loading
        ? <Spinner size='size-16 mx-auto' position='flex justify-center items-center mt-10' />
        : <MovieDetail movie={movie} error={error} />
}   