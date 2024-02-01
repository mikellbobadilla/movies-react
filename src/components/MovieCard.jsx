import { Link } from 'react-router-dom'

export function MovieCard({ title, poster, url }) {
    return (
        <Link to={url} className='w-full flex flex-col justify-center gap-2 hover:text-cruise-500' >
            <figure className='h-64 w-44 rounded-md mx-auto overflow-hidden'>
                <img src={poster} alt={'Movie: ' + title} className='rounded-md h-64 w-44 hover:scale-105 transition' />
            </figure>
            <h2 className='text-sm text-center font-bold text-brick-red-400/85 text-balance mb-4'>
                {title}
            </h2>
        </Link>
    )
}
