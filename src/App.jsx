import { RouterProvider } from 'react-router-dom'
import { MoviesProvider } from './context/movies_context'
import { router } from './router'

export default function App() {
  return (
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  )
}