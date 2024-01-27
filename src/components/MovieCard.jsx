import { Link } from 'react-router-dom'

export function MovieCard({ title, poster, year, type, url }) {
    return (
        <Link to={url} className='px-1 py-2 w-full flex justify-start h-52 gap-4' >
            <p className='absolute bottom-0 right-0 bg-[#2D4356] text-brick-red-200 text-sm inline-block px-4 text-center py-1 rounded-tl-xl rounded-br-sm'>
                {type}
            </p>
            <div className=' w-32 h-full'>
                <div style={{ backgroundImage: `url('${poster}')` }} className='rounded-sm w-32 h-full bg-contain' />
            </div>
            <div className='w-full text-center'>
                <h2 className='text-xl lg:text-2xl font-bold text-brick-red-400/85 text-balance mb-4'>
                    {title}
                </h2>
                <p className='text-lg text-[#F3DEBA]'>
                    {year}
                </p>
            </div>
        </Link>
    )
}
