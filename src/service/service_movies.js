import { API_KEY } from '../utils/consts'

export async function searchMovies({ search }) {

    if (search.trim() === '') return null

    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await res.json()

        const movies = json.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            type: movie.Type,
            year: movie.Year,
            poster: movie.Poster
        }))
        return movies

    } catch (e) {
        throw new Error('Error searching movies')
    }
}