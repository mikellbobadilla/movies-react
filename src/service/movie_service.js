import { API_KEY } from '../utils/consts'

export const MovieService = {

    getBy: getMovies,
    get: getMovie
}

async function getMovies ({search}) {
    if (search.trim() === '') return null

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await res.json()
        
        const movies = data.Search?.map( movie => ({
                id: movie.imdbID,
                title: movie.Title,
                type: movie.Type,
                year: movie.Year,
                poster: movie.Poster
            }))

        return movies

    } catch(err) {
        throw new Error('Error searching movies')
    }
}

async function getMovie({movieId}) {

    if(movieId.trim() === '') return null

    try {

        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`)
        const data = await res.json()

        if(data.Response === 'False') {
            throw new Error(data.Error)
        }

        const movie = {}

        movie.id = data.imdbID
        movie.title = data.Title
        movie.description = data.Plot
        movie.poster = data.Poster
        movie.actors = data.Actors
        movie.language = data.Language
        movie.genre = data.Genre
        movie.duration = data.Runtime

        return movie

    } catch(err) {
        throw new Error('Error getting movie')
    }
}