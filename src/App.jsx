import { RouterProvider } from 'react-router-dom'
import { MoviesProvider } from './context/context_movies'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { getMovie } from './service/service_movie'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/movies/:movieId',
    Component: Movie,
    loader: getMovie
  }
])

function App() {
  return (
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  )
}

export default App
