import { Link } from 'react-router-dom'
import { BackButton } from './BackButton'
import { Section } from './Section'

function NoMovieDetails() {
    return (
        <main className='size-96 w-full flex flex-col items-center py-40'>
            <h1 className='text-center text-4xl text-brick-red-500 mb-10'>Movie Not Found</h1>
            <p className='text-center text-7xl text-brick-red-300'>404</p>
            <Link to='#' onClick={() => window.history.back()}>Go to Home</Link>
        </main>
    )
}

function Movie({ movie }) {
    return (
        <main className='container py-6 mx-auto px-3 sm:max-w-screen-sm'>
            <BackButton />
            <section className='rounded-sm mb-3 mx-auto w-full flex gap-4 flex-col sm:flex-row justify-center items-center'>
                <figure className='rounded-sm flex items-center justify-center'>
                    <img
                        className='w-52 rounded-lg'
                        src={movie.poster} alt={`Movie: ${movie.title}`}
                    />
                </figure>
                <ol className='p-5 bg-gray-700/40 rounded-lg w-full'>
                    <li className='mb-3 text-pretty'>
                        <strong className='text-lime-500/40'>Actors: </strong>
                        <span>{movie.actors}</span>
                    </li>

                    <li className='mb-3 text-pretty'>
                        <strong className='text-lime-500/40'>Language: </strong>
                        <span>{movie.language}</span>
                    </li>

                    <li className='mb-3 text-pretty'>
                        <strong className='text-lime-500/40'>Genre: </strong>
                        <span>{movie.genre}</span>
                    </li>

                    <li className='mb-3 text-pretty'>
                        <strong className='text-lime-500/40'>Duration: </strong>
                        <span>{movie.duration}</span>
                    </li>
                </ol>
            </section>

            <Section>
                <h2 className='text-2xl lg:text-3xl mb-3 text-brick-red-500/80'>{movie.title}</h2>
                <p className='text-base lg:text-xl text-pretty'>{movie.description}</p>
            </Section>
        </main>
    )
}


export function MovieDetail({ movie }) {
    return (
        
        (!movie)
            ? <NoMovieDetails />
            : <Movie movie={movie} />
            
        
    )
}