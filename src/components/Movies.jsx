import { MovieCard } from './MovieCard'
import { MoviesContext } from '../context/context_movies'
import { useContext } from 'react'
import { Spinner } from './Spinner'

function ListOfMovies({ movies }) {
  return (
    <ul className='grid grid-cols-1 mx-auto gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl'>
      {movies?.map(({ id, title, poster, year, type }) => (
        <li key={id} className='rounded-md bg-gray-800/50 hover:bg-gray-500/10 transition relative'>
          <MovieCard
            url={`/movies/${id}`}
            title={title}
            poster={poster}
            year={year}
            type={type}
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
