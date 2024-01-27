import { API_KEY } from '../utils/consts'

export async function getMovie({ params }) {
    const { movieId } = params

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`)
        const data = await res.json()
        const movie = {}

        if (data.Response === 'False') {
            throw new Error('Movie not found!')
        }

        movie.id = data.imdbID
        movie.title = data.Title
        movie.description = data.Plot
        movie.poster = data.Poster
        movie.actors = data.Actors
        movie.language = data.Language
        movie.genre = data.Genre
        movie.duration = data.Runtime
        return movie
    }
    catch (err) {
        return null
    }

}