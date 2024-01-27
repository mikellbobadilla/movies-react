import { useLoaderData } from 'react-router-dom'
import { MovieDetail } from '../components/MovieDetail'
import { useEffect } from 'react'

export function Movie() {

    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [])

    const movie = useLoaderData()
    console.log(movie)
    return (
        <MovieDetail movie={movie} />
    )
}