import { MovieCard } from './MovieCard'
import { MoviesContext } from '../context/movies_context'
import { useContext } from 'react'
import { Spinner } from './Spinner'

function ListOfMovies({ movies }) {
  return (
    <ul className='grid grid-cols-2 mx-auto gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:max-w-5xl'>
      {movies?.map(({ id, title, poster }) => (
        <li key={id} className='transition relative'>
          <MovieCard
            url={`/movies/${id}`}
            title={title}
            poster={poster}
          />
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResult() {
  return (
    <p className='text-red-500/80 mt-3 text-2xl text-center'>No se encontraron peliculas para esta búsqueda.</p>
  )
}

export function Movies() {

  const { movies, loading } = useContext(MoviesContext)
  const hasMovies = movies?.length >= 0

  return loading
    ? <Spinner size='size-12 mx-auto' position='flex justify-center items-center mt-10' />
    : hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />

}
