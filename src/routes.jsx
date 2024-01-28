import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { MovieService } from './service/movie_service'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movies/:movieId',
        element: <Movie />,
        loader: MovieService.get
    }
])