import { Link } from 'react-router-dom'

export function BackButton() {
    return (
        <div className='size-26 absolute top-5 left-2 rounded-full flex items-center justify-center transition hover:bg-brick-red-700/40 hover:text-brick-red-100'>
            <Link to='#' onClick={() => window.history.back()} className='pr-2 pl-1 pt-1 pb-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" />
                </svg>
            </Link>
        </div>
    )
}