import { createContext } from 'react'
import { useState } from 'react'

export const MoviesContext = createContext()

export function MoviesProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    return (
        <MoviesContext.Provider value={{
            movies,
            setMovies,
            loading,
            setLoading
        }} >
            {children}
        </MoviesContext.Provider>
    )
}