import { RouterProvider } from 'react-router-dom'
import { MoviesProvider } from './context/context_movies'
import { router } from './routes'

export default function App() {
  return (
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  )
}