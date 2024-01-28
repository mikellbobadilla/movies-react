import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movies/:movieId',
        element: <Movie />,
    }
])